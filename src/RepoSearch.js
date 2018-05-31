import React from 'react';
import {connect} from 'react-redux';
import Api from './Api';

const RepoSeach = (props) =>{
    return(
        <div>
            <h1>Repo Search</h1>
            <form onSubmit={(evt) => props.handelSubmit(evt, props.inputValue)}>
                <input value={props.inputValue} onChange={props.handleInputChange} />
            </form>
            <ul>
                {props.repos.map((repo) => {
                    return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
                })}
            </ul>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return{
        inputValue: state.searchInputValue,
        repos: state.repos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputChange: (evt) => {
            dispatch({type: 'SEARCH_INPUT_CHANGE', value: evt.target.value});   
        },
        handelSubmit: (evt, query) => {
            evt.preventDefault();
            Api.getRepos(dispatch, query);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSeach);