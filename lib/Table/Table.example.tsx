import React, {useState} from 'react';
import Table from './Table';

const TableExample = () => {
	const columns = [
		{
			title: '姓名',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: '年龄',
			dataIndex: 'age',
			key: 'age'
		},
		{
			title: '住址',
			dataIndex: 'address',
			key: 'address'
		}
	];

	const dataSource = [
		{
			key: '1',
			name: '胡彦斌',
			age: 32,
			address: '西湖区湖底公园1号'
		},
		{
			key: '2',
			name: '胡彦祖',
			age: 42,
			address: '西湖区湖底公园1号'
		}
  ];
  

	const [selectedItems, useSelectedItems] = useState([])
	const [orderBy, useOrderBy] = useState({
		name: true,
		age: 'asc',
		address: 'desc',
	});
	return (
    <Table
      columns={columns}
      dataSource={dataSource}
      border={true} 
      stripe={true}
      selectedItems={selectedItems}
			useSelectedItems={useSelectedItems}
			orderBy={orderBy}
			useOrderBy={useOrderBy}
			// height={200}
    />
  );
};

export default TableExample;
