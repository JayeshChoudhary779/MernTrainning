import Axios from 'axios';
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,

  REQUESTED_PRODUCT_LIST_FAIL,
  REQUESTED_PRODUCT_LIST_REQUEST,
  REQUESTED_PRODUCT_LIST_SUCCESS,

  CUSTOMER_PRODUCT_LIST_FAIL,
  CUSTOMER_PRODUCT_LIST_REQUEST,
  CUSTOMER_PRODUCT_LIST_SUCCESS,
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  REQUEST_PRODUCT_ADD_REQUEST,
  REQUEST_PRODUCT_ADD_SUCCESS,
  REQUEST_PRODUCT_ADD_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_CHOSEN_SUCCESS,
  PRODUCT_UPDATE_CHOSEN_FAIL,
  PRODUCT_UPDATE_CHOSEN_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_FAIL,
  PRODUCT_SEARCH_BY_OPTION_REQUEST,
  PRODUCT_SEARCH_BY_OPTION_SUCCESS,
  PRODUCT_SEARCH_BY_OPTION_FAIL,
  SEARCH_STATUS,

  PRODUCTS_SORT_BY_NAMED,
  PRODUCTS_SORT_BY_NAMEA,
  PRODUCTS_SORT_BY_PRICED,
  PRODUCTS_SORT_BY_PRICEA,
  PRODUCTS_SORT_BY_RATINGD,
  PRODUCTS_SORT_BY_RATINGA,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/products');
    localStorage.setItem('adminProduct', JSON.stringify(data));
    console.log("data :", data)
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const addProduct = (newProduct) => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_ADD_REQUEST,
  });
  const {
    userSignin: { adminInfo },
  } = getState();
  try {
    const { data } = await Axios.post(`/api/products/addProduct`, newProduct, {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    });
    dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data });
    // try { 
    //    const { data } = await Axios.post(`/api/products/addProduct`, newProduct)
    //   dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_ADD_FAIL, payload: error.message });
  }
};


export const updateProduct = (productId, updateProduct) => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_UPDATE_REQUEST,
  });
  const {
    userSignin: { adminInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/products/updateProduct/${productId}`, updateProduct, {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    });
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    // try { 
    //    const { data } = await Axios.put(`/api/products/updateProduct/${productId}`,updateProduct)
    //   dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error.message });
  }
};


export const updateProductChosen = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_UPDATE_CHOSEN_REQUEST,
  });
  try {
    dispatch({ type: PRODUCT_UPDATE_CHOSEN_SUCCESS, payload: productId });
  }
  catch (error) {
    dispatch({ type: PRODUCT_UPDATE_CHOSEN_FAIL, payload: error.message });
  }
}

export const searchedProduct = (products, productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_SEARCH_REQUEST,
  });
  try {
    var myProduct = products.find((x) => x._id === productId);
    console.log("my prod :", myProduct);
    dispatch({ type: PRODUCT_SEARCH_SUCCESS, payload: myProduct });
  }
  catch (error) {
    dispatch({ type: PRODUCT_SEARCH_FAIL, payload: error.message });
  }
}


export const deleteProductCustomer = (productId) => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_DELETE_REQUEST,
  });
  const {
    customerSignin: { customerInfo},
  } = getState();
  try {
    const { data } = await Axios.delete(`/api/products/deleteProduct/${productId}`, {
      headers: {
        Authorization: `Bearer ${customerInfo.token}`,
      },
    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};

export const deleteProduct = (productId) => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_DELETE_REQUEST,
  });
  const {
    userSignin:{adminInfo}
  } = getState();
  try {
    const { data } = await Axios.delete(`/api/products/deleteProduct/${productId}`, {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};


////////////////////////////customer part 

export const listCustomerProducts = (name) => async (dispatch,getState) => {
  dispatch({
    type: CUSTOMER_PRODUCT_LIST_REQUEST,
  });
  const {
    customerSignin:{customerInfo}
  } = getState();
  try {
    const { data } = await Axios.get(`/api/products/customer/${name}`,{
    headers: {
      Authorization: `Bearer ${customerInfo.token}`,
    }})
    console.log("data :", data)
    localStorage.setItem('customerProduct', JSON.stringify(data));
    dispatch({ type: CUSTOMER_PRODUCT_LIST_SUCCESS, payload: data });
  }catch (error) {
    dispatch({ type: CUSTOMER_PRODUCT_LIST_FAIL, payload: error.message });
  }
};



export const addRequestProduct = (newProduct) => async (dispatch, getState) => {
  dispatch({
    type: REQUEST_PRODUCT_ADD_REQUEST,
  });
  const {
    customerSignin: { customerInfo },
  } = getState();
  try {
    const { data } = await Axios.post(`/api/products/addRequestProduct`, newProduct, {
      headers: {
        Authorization: `Bearer ${customerInfo.token}`,
      },
    });
    dispatch({ type: REQUEST_PRODUCT_ADD_SUCCESS, payload: data });
    console.log("data :", data)
  } catch (error) {
    dispatch({ type: REQUEST_PRODUCT_ADD_FAIL, payload: error.message });
  }
};

//////////////////Admin part/////////////

export const listRequestedProducts = () => async (dispatch,getState) => {
  dispatch({
    type: REQUESTED_PRODUCT_LIST_REQUEST,
  });
  const {
    userSignin: { adminInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/products/admin/requestedProducts`,{
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    });
    console.log("data :", data)
    console.log("in action request")
    dispatch({ type: REQUESTED_PRODUCT_LIST_SUCCESS, payload: data });
    localStorage.setItem('requestedProducts', JSON.stringify(getState().requestedProductList.requestedProducts));

  } catch (error) {
    dispatch({ type: REQUESTED_PRODUCT_LIST_FAIL, payload: error.message });
  }
};

/////////////////////////////// search part //////////


export const searchProducts = (option, search, min, max) => async (dispatch) => {
  dispatch({
    type: PRODUCT_SEARCH_BY_OPTION_REQUEST,
  });
  try {

    switch (option) {

      case "name":

        console.log("namesearch : ", search)
        Axios.get(`/api/products/search/name/${search}`)
          .then(res => {
            const { ...data } = res.data;
            console.log("nameData :", data.nameData)
            dispatch({ type: PRODUCT_SEARCH_BY_OPTION_SUCCESS, payload: data.nameData });
          })
          .catch(error => {
            console.log(error)
          });
        break;

      case "category":

        console.log("categorysearch : " + search)
        const { data } = await Axios.get(`/api/products/search/category/${search}`);
        console.log("categotyData :", data.data)
        dispatch({ type: PRODUCT_SEARCH_BY_OPTION_SUCCESS, payload: data.data });


        break;

      case "brand":

        console.log("brandsearch : " + search)
        Axios.get(`/api/products/search/brand/${search}`)
          .then(res => {
            const { ...data } = res.data;
            console.log("brandData :", data.data)
            dispatch({ type: PRODUCT_SEARCH_BY_OPTION_SUCCESS, payload: data.data });
          })
          .catch(error => {
            console.log(error)
          });
        break;

      case "rating":

        console.log("ratingsearch : " + search)
        Axios.get(`/api/products/search/rating/${search}`)
          .then(res => {
            const { ...data } = res.data;
            console.log("ratingData :", data.data)
            dispatch({ type: PRODUCT_SEARCH_BY_OPTION_SUCCESS, payload: data.data });
          })
          .catch(error => {
            console.log(error)
          });
        break;

      case "price":

        console.log("pricesearch : ", min, max)
        Axios.get(`/api/products/search/price/${min}/${max}`)
          .then(res => {
            const { ...data } = res.data;
            console.log("priceData :", data.data)
            dispatch({ type: PRODUCT_SEARCH_BY_OPTION_SUCCESS, payload: data.data });
          })
          .catch(error => {
            console.log(error)
          });
        break;
    }
  }
  catch (error) {
    dispatch({ type: PRODUCT_SEARCH_BY_OPTION_FAIL, payload: error.message });
  }
}


export const setSearch = () => async (dispatch) => {
  const searchStaus = localStorage.getItem('search')
  dispatch({
    type: SEARCH_STATUS, payload: searchStaus
  });
}

////////////////////////////////sorting part//////////////



export const sortProducts = (option) => async (dispatch, getState) => {
  const {
    productList: { products }
  } = getState();

  switch (option) {

    case "sortNamed":

      console.log("sortNamed ", option)
      console.log("Products ", products)

      const sortbyNamed =   products.sort(function(a, b){
        if(a.name < b.name) { return 1; }
        if(a.name > b.name) { return -1; }
        return 0;
    })

      localStorage.setItem('userSorted', JSON.stringify(sortbyNamed));
      console.log(" sortbyNamed  ", sortbyNamed)

      dispatch({ type: PRODUCTS_SORT_BY_NAMED, payload: sortbyNamed })
      
      break;

    case "sortPriced":

      console.log("sortPriced ", option)
      console.log("Products ", products)

      const sortbyPriced = products.sort((a, b) => b.price - a.price)

      localStorage.setItem('userSorted', JSON.stringify(sortbyPriced));
      console.log(" sortbyPriced  ", sortbyPriced)

      dispatch({ type: PRODUCTS_SORT_BY_PRICED, payload: sortbyPriced })
      break;

    case "sortRatingd":

      console.log("sortRatingd ", option)
      console.log("Products ", products)

      const sortbyRatingd = products.sort((a, b) => b.rating - a.rating)
      localStorage.setItem('userSorted', JSON.stringify(sortbyRatingd));
      console.log(" sortbyRatingd  ", sortbyRatingd)

      dispatch({ type: PRODUCTS_SORT_BY_RATINGD, payload: sortbyRatingd })
      break;

      case "sortPricea":

        console.log("sortPricea ", option)
        console.log("Products ", products)
  
      const sortbyPricea = products.sort((a, b) => a.price - b.price)

        localStorage.setItem('userSorted', JSON.stringify(sortbyPricea));
        console.log(" sortbyPricea  ", sortbyPricea)
  
        dispatch({ type: PRODUCTS_SORT_BY_PRICEA, payload: sortbyPricea })
        break;

    case "sortNamea":

      console.log("sortNamea ", option)
      console.log("Products ", products)

      const sortbyNamea =   products.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
      localStorage.setItem('userSorted', JSON.stringify(sortbyNamea));
      console.log(" sortbyNamea  ", sortbyNamea)

      dispatch({ type: PRODUCTS_SORT_BY_NAMEA, payload: sortbyNamea })
      break;

      case "sortRatinga":

        console.log("sortRatinga ", option)
        console.log("Products ", products)

        const sortbyRatinga = products.sort((a, b) => a.rating - b.rating)
  
        localStorage.setItem('userSorted', JSON.stringify(sortbyRatinga));
        console.log(" sortbyRatinga  ", sortbyRatinga)
  
        dispatch({ type: PRODUCTS_SORT_BY_RATINGA, payload: sortbyRatinga })
        break;

  }
};