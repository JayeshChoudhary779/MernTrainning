import Axios from 'axios';

import {
  CUSTOMER_REGISTER_FAIL,
  CUSTOMER_REGISTER_REQUEST,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_SIGNIN_FAIL,
  CUSTOMER_SIGNIN_REQUEST,
  CUSTOMER_SIGNIN_SUCCESS,
  CUSTOMER_SIGNOUT,
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_UPDATE_PROFILE_FAIL,
  CUSTOMER_UPDATE_PROFILE_REQUEST,
  CUSTOMER_UPDATE_PROFILE_SUCCESS,
  PRODUCTS_SEARCH_BY_NAME,
  PRODUCTS_SEARCH_BY_CATEGORY,
  PRODUCTS_SEARCH_BY_BRAND,
  PRODUCTS_SEARCH_BY_RATING,

  
  CUSTOMER_PRODUCTS_SORT_BY_NAMED,
  CUSTOMER_PRODUCTS_SORT_BY_NAMEA,
  CUSTOMER_PRODUCTS_SORT_BY_PRICED,
  CUSTOMER_PRODUCTS_SORT_BY_PRICEA,
  CUSTOMER_PRODUCTS_SORT_BY_RATINGD,
  CUSTOMER_PRODUCTS_SORT_BY_RATINGA,
} from '../constants/customerConstants';

export const registerCustomer = (name, email, password,contact) => async (dispatch) => {
  dispatch({ type: CUSTOMER_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post('/api/customers/register', {
      name,
      email,
      password,
      contact
    });
    dispatch({ type: CUSTOMER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: CUSTOMER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('customerInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CUSTOMER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signinCustomer = (email, password) => async (dispatch) => {
  dispatch({ type: CUSTOMER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post('/api/customers/signin', { email, password });
    dispatch({ type: CUSTOMER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('customerInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: CUSTOMER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signoutCustomer = () => (dispatch) => {
  localStorage.removeItem('customerInfo');
  localStorage.removeItem('customerProduct');
  localStorage.removeItem('customerSearched');
  localStorage.removeItem('customerSorted');
  dispatch({ type: CUSTOMER_SIGNOUT });
  document.location.href = '/signin';
};



export const detailsCustomer = (customerId) => async (dispatch, getState) => {
  dispatch({ type: CUSTOMER_DETAILS_REQUEST, payload: customerId });
  const {
    customerSignin: { customerInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/customers/${customerId}`, {
      headers: { Authorization: `Bearer ${customerInfo.token}` },
    });
    dispatch({ type: CUSTOMER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CUSTOMER_DETAILS_FAIL, payload: message });
  }
};

export const updateCustomerProfile = (customer) => async (dispatch, getState) => {
  dispatch({ type: CUSTOMER_UPDATE_PROFILE_REQUEST, payload: customer });
  const {
    customerSignin: { customerInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/customers/profile`, customer, {
      headers: { Authorization: `Bearer ${customerInfo.token}` },
    });
    dispatch({ type: CUSTOMER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: CUSTOMER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('customerInfo', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CUSTOMER_UPDATE_PROFILE_FAIL, payload: message });
  }
};



export const searchCustomerProducts = (option, search,min,max) => async (dispatch, getState) => {
  const {
    customerProductList: { customerProducts }
  } = getState();
  
    switch (option) {
      case "name":

        console.log("name ", search)
        
        console.log("customerProducts ", customerProducts)
        
        // const searchedName = customerProducts.filter(b=> { return b.name.Search.(search) })
        const searchedName = customerProducts.filter(b=> b.name===search || b.name.toLowerCase()===search )
        localStorage.setItem('customerSearched', JSON.stringify(searchedName));
        console.log(" serachedname list  ", searchedName)

        dispatch({ type: PRODUCTS_SEARCH_BY_NAME, payload: searchedName })
        break;

      case "category":
        console.log("category " + search)
        const searchedCategory = customerProducts.filter(b=> b.category===search  || b.category.toLowerCase()===search)
        localStorage.setItem('customerSearched', JSON.stringify(searchedCategory));

        dispatch({ type: PRODUCTS_SEARCH_BY_CATEGORY, payload: searchedCategory })
        break;

      case "rating":

        console.log("rating " + search)
        const searchedRating = customerProducts.filter(b=> b.rating>search )
        localStorage.setItem('customerSearched', JSON.stringify(searchedRating));

        dispatch({ type: PRODUCTS_SEARCH_BY_RATING, payload: searchedRating})
        break;

      case "brand":

        console.log("brand " + search)
        const searchedBrand = customerProducts.filter(b=> b.brand===search || b.brand.toLowerCase()===search)
        localStorage.setItem('customerSearched', JSON.stringify(searchedBrand ));

        dispatch({ type: PRODUCTS_SEARCH_BY_BRAND, payload: searchedBrand })
        break;

        case "price":

          console.log("price " + min,max)
          const searchedPrice = customerProducts.filter(b=> b.price>min && b.price<max )
          localStorage.setItem('customerSearched', JSON.stringify(searchedPrice));
  
          dispatch({ type: PRODUCTS_SEARCH_BY_RATING, payload: searchedPrice})
          break;
    }
};


////////////////////////////////sorting part//////////////



export const sortCustomerProducts = (option) => async (dispatch, getState) => {
  const {
    customerProductList: { customerProducts }
  } = getState();

  switch (option) {

    case "sortNamed":

      console.log("sortNamed ", option)
      console.log("customerProducts ", customerProducts)

      const sortbyNamed =   customerProducts.sort(function(a, b){
        if(a.name < b.name) { return 1; }
        if(a.name > b.name) { return -1; }
        return 0;
    })

      localStorage.setItem('customerSorted', JSON.stringify(sortbyNamed));
      console.log(" sortbyNamed  ", sortbyNamed)

      dispatch({ type: CUSTOMER_PRODUCTS_SORT_BY_NAMED, payload: sortbyNamed })
      
      break;

    case "sortPriced":

      console.log("sortPriced ", option)
      console.log("customerProducts ", customerProducts)

      const sortbyPriced = customerProducts.sort((a, b) => b.price - a.price)

      localStorage.setItem('customerSorted', JSON.stringify(sortbyPriced));
      console.log(" sortbyPriced  ", sortbyPriced)

      dispatch({ type: CUSTOMER_PRODUCTS_SORT_BY_PRICED, payload: sortbyPriced })
      break;

    case "sortRatingd":

      console.log("sortRatingd ", option)
      console.log("customerProducts ", customerProducts)

      const sortbyRatingd = customerProducts.sort((a, b) => b.rating - a.rating)
      localStorage.setItem('customerSorted', JSON.stringify(sortbyRatingd));
      console.log(" sortbyRatingd  ", sortbyRatingd)

      dispatch({ type: CUSTOMER_PRODUCTS_SORT_BY_RATINGD, payload: sortbyRatingd })
      break;

      case "sortPricea":

        console.log("sortPricea ", option)
        console.log("customerProducts ", customerProducts)
  
      const sortbyPricea = customerProducts.sort((a, b) => a.price - b.price)

        localStorage.setItem('customerSorted', JSON.stringify(sortbyPricea));
        console.log(" sortbyPricea  ", sortbyPricea)
  
        dispatch({ type: CUSTOMER_PRODUCTS_SORT_BY_PRICEA, payload: sortbyPricea })
        break;

    case "sortNamea":

      console.log("sortNamea ", option)
      console.log("customerProducts ", customerProducts)

      const sortbyNamea =   customerProducts.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
      localStorage.setItem('customerSorted', JSON.stringify(sortbyNamea));
      console.log(" sortbyNamea  ", sortbyNamea)

      dispatch({ type: CUSTOMER_PRODUCTS_SORT_BY_NAMEA, payload: sortbyNamea })
      break;

      case "sortRatinga":

        console.log("sortRatinga ", option)
        console.log("customerProducts ", customerProducts)

        const sortbyRatinga = customerProducts.sort((a, b) => a.rating - b.rating)
  
        localStorage.setItem('customerSorted', JSON.stringify(sortbyRatinga));
        console.log(" sortbyRatinga  ", sortbyRatinga)
  
        dispatch({ type: CUSTOMER_PRODUCTS_SORT_BY_RATINGA, payload: sortbyRatinga })
        break;

  }
};