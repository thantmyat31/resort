import React, { Component } from 'react';

import Client from './../contentful/contentful';


const RoomContext = React.createContext();
class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
		type: 'all',
		capacity: 0,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false
    };
    
    getData = async () => {
        try {
            const {items} = await Client.getEntries({
                content_type: 'thantResortRoom',
                order: 'sys.createdAt'
            });
            let rooms = this.formatData(items);
            let featuredRooms = rooms.filter((room) => room.featured === true);
            let maxPrice = Math.max(...rooms.map((room) => room.price));
            let maxSize = Math.max(...rooms.map((room) => room.size));
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            });

        } catch (err) {
            console.log('[getData Error]:', err)
        }
    }

	componentDidMount() {
        this.getData();
    }

	formatData = (items) => {
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let room = { ...item.fields, images, id };
			return room;
		});
		return tempItems;
	};

	getRoom = (slug) => {
		let tempRooms = [ ...this.state.rooms ];
		const room = tempRooms.find((room) => room.slug === slug);
		return room;
	};

	handleOnChange = (event) => {
		let target = event.target;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		let name = event.target.name;

		this.setState(
			{
				[name]: value
			},
			this.filterRoom
		);
	};

	filterRoom = () => {
		let { rooms, type, capacity, price, maxSize, minSize, breakfast, pets } = this.state;
		let tempRooms = [ ...rooms ];
		capacity = parseInt(capacity);
		price = parseInt(price);

		// Filter by type
		if (type !== 'all') {
			tempRooms = tempRooms.filter((room) => room.type === type);
		}

		// Filter by capacity
		if (capacity > 1) {
			tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
		}

		// Filter by price
		tempRooms = tempRooms.filter((room) => room.price <= price);

		// Filter by size
		tempRooms = tempRooms.filter((room) => room.size >= minSize && room.size <= maxSize);

		// Fitler by breakfast
		if (breakfast) {
			tempRooms = tempRooms.filter((room) => room.breakfast === true);
		}

		// Fitler by pets
		if (pets) {
			tempRooms = tempRooms.filter((room) => room.pets === true);
		}

		this.setState({ sortedRooms: tempRooms });
	};

	render() {
		return (
			<RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleOnChange: this.handleOnChange }}>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
