import React, { Component } from 'react';

import PlayersStore from '../stores/PlayersStore';
import * as PlayersActions from '../actions/PlayersActions'
import PlayersListComponent from './players/PlayersListComponent';
import AddPlayerComponent from './players/AddPlayerComponent';
import ConfirmationModal from './common/ConfirmationModal';


export default class PlayersComponent extends Component {
    constructor() {
        super();
        this.onPlayersChange = this.onPlayersChange.bind(this);
        this.state = {
            players: PlayersStore.getAll()
        };
    }

    onPlayersChange() {
        this.setState({
            players: PlayersStore.getAll()
        });
    }

    componentWillMount() {
        PlayersStore.addChangeListener(this.onPlayersChange);
    }

    componentWillUnmount() {
        PlayersStore.removeChangeListener(this.onPlayersChange);
    }

    addNewPlayer(name) {
        PlayersActions.createPlayer(name);
    }

    confirmDelete(p) {
        this.setState({
            playerToDelete: p
        });
    }

    hideConfirmationModal() {
        delete this.state.playerToDelete;
        this.setState(this.state);
    }

    deletePlayer() {
        const id = this.state.playerToDelete.id;
        delete this.state.playerToDelete;
        this.setState(this.state);
        PlayersActions.deletePlayer(id);
    }

    render() {
        var confirmationModal;
        if (this.state.playerToDelete) {
            confirmationModal = (<ConfirmationModal
                            onCancel={this.hideConfirmationModal.bind(this)}
                            onDelete={this.deletePlayer.bind(this)} />);
        }
        return (
            <div>
                {confirmationModal}
                <h1>Players</h1>
                <PlayersListComponent players={this.state.players} onPlayerDeleted={this.confirmDelete.bind(this)} />
                <AddPlayerComponent onNewPlayerAdded={this.addNewPlayer.bind(this)} />
            </div>
        )
    }
}
