import React, {Component} from 'react';
import uuid from 'uuid';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItems} from '../actions/itemActions';

class ItemModal extends Component {
	state = {
		modal: false,
		name: null
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		})
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = e => {
		e.preventDefault()
		const newItem = {
			name: this.state.name
		}

		// add Item
		this.props.addItems(newItem)

		// close Modal
		this.toggle()
	}

	render() {
		return (
			<div>
				<Button
					color="dark"
					style={{marginBottom: '2rem'}}
					onClick={this.toggle}
				>
					Add a Item
				</Button>

				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
				>
					<ModalHeader
						toggle={this.toggle}
					>
						Add To Shopping List
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label>Item Name</Label>
								<Input
									type="text"
									name="name"
									placeholder="Item Name"
									id="name"
									onChange={this.onChange}
								/>
							</FormGroup>
							<Button
								color="dark"
								style={{marginTop: '2rem'}}
								block
							>
								Add A Item
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

export default connect(null, {addItems})(ItemModal);