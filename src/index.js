import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import configureAppStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupInterceptors } from "./middleware/network";
// import { Router } from "./router";
import "antd/dist/antd.min.css";
import "./index.scss";
import MainContainer from "./containers/main-container";
const store = configureAppStore();
setupInterceptors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<MainContainer/>
		</BrowserRouter>
	</Provider>
); 	

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
