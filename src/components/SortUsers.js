import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

function SortUsers({ set, sortUser }) {
	return (
		<div>
			<InputLabel id="label">Sort Users</InputLabel>
			<Select
				labelId="label"
				id="select"
				value={sortUser}
				onChange={(e) => {
					if (set) {
						set(e.target.value);
					}
					console.log('changed', e.target.value);
				}}
			>
				<MenuItem value="first_name">First Name</MenuItem>
				<MenuItem value="last_name">Last Name</MenuItem>
			</Select>
		</div>
	);
}
export default SortUsers;
