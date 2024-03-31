import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponseType } from "../../constants";
import { clearGetUserList, getUserList } from "../../redux/action";
import Table from "react-bootstrap/Table";

function MainContainer() {
	const userListReducer = useSelector(state => state.dataReducer);
	const dispatch = useDispatch();
	const [usersData, setUsersData] = useState();

	useEffect(() => {
		if (userListReducer.getUserListDataCompleted === ResponseType.FULFILLED) {
			setUsersData(userListReducer.userList);
			dispatch(clearGetUserList());
		}
		if (userListReducer.fetchAllDataCompleted === ResponseType.REJECTED) {
			dispatch(clearGetUserList());
		}
	}, [userListReducer.getUserListDataCompleted]);

	useEffect(() => {
		dispatch(getUserList());	
	}, []);

	return (
		<div className="App">
			<h5>User Data</h5>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>NAME</th>
						<th>USER NAME</th>
						<th>EMAIl</th>
						<th>ADDRESS</th>
						<th>Phone</th>
						<th>Website</th>
						<th>Company Details</th>
					</tr>
				</thead>
				<tbody>
					{usersData && usersData.map((data) => 
						<tr  key={data.id}>
							<td>{data.id}</td>
							<td>{data.name}</td>
							<td>{data.username}</td>
							<td>{data.email}</td>
							<td>{data.address.street},{data.address.city},{data.address.zipcode}</td>
							<td>{data.phone}</td>
							<td>{data.website}</td>
							<td>{data.company.name}</td>
						</tr>
					)}
				</tbody>
			</Table>
				
		</div>
	);
}

export default MainContainer;