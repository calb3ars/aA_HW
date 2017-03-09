import APIUtil from '../util/api_util';
import receiveSearchGiphys from '../actions/giphy_actions';

const fetchSearchGiphys = (searchTerm) => (
  (dispatch) => {
    APIUtil.fetchSearchGiphys(searchTerm)
      .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
  }
);

export default fetchSearchGiphys;
