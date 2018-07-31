import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import { getItems, deleteItems } from '../actions/itemActions';
import propTypes from 'prop-types';

import ItemModal from './ItemModal';

class ShoppingList extends Component {

	componentDidMount() {
		this.props.getItems();
	}

	onClickDelete = id => {
		this.props.deleteItems(id);
	}

	render() {
		const { items } = this.props.item;
		return (
			<Container>
				<ItemModal/>
				<ListGroup>
					<TransitionGroup className="shopping-list">
						{
							items.map(({_id, name}) => (
								<CSSTransition
									key={_id}
									timeout={500}
									classNames="fade"
								>
									<ListGroupItem key={_id}>
										<Button
											className="remove-btn"
											color="danger"
											size="sm"
											onClick={this.onClickDelete.bind(this, _id)}
										>
											&times;
										</Button>
										{name}
									</ListGroupItem>
								</CSSTransition>
							))
						}
					</TransitionGroup>
				</ListGroup>
			</Container>
		)
	}
}

ShoppingList.propTypes = {
	getItems: propTypes.func.isRequired,
	item: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	item: state.item
})

export default  connect(mapStateToProps, {getItems, deleteItems})(ShoppingList);