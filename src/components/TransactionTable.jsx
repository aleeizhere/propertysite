import React from 'react'

import { Space, Table, Tag } from 'antd';
// const columns = [
//   {
//     title: 'Type',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     key: 'status',
//   },
//   {
//     title: 'Date',
//     dataIndex: 'date',
//     key: 'date',
//   },
//   {
//     title: 'Wallet',
//     key: 'tags',
//     dataIndex: 'tags',
//     // render: (_, { tags }) => (
//     //   <>
//     //     {tags.map((tag) => {
//     //       let color = tag.length > 5 ? 'geekblue' : 'green';
//     //       if (tag === 'loser') {
//     //         color = 'volcano';
//     //       }
//     //       return (
//     //         <Tag color={color} key={tag}>
//     //           {tag.toUpperCase()}
//     //         </Tag>
//     //       );
//     //     })}
//     //   </>
//     // ),
//   },
//   {
//     title: 'Amount',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//       </Space>
//     ),
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     status: 32,
//     date: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     status: 42,
//     date: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     status: 32,
//     date: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

const data = [
  {
    key: '1',
    type:'deposit',
    status:'completed',
    date: "24 jan 2023",
    amount:"100100",
  },
  {
    key: '2',
    type:'deposit',
    status:'pending',
    date:'21 Jan 2023',
    amount:"5005000",
  },
  {
    key: '3',
    type:'withdraw',
    status:'pending',
    date:'29 Dec 2022',
    amount:"5005000",
  },
];

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const TransactionTable = () => {
  return (
    <div className='mt-12'>
      <Table columns={columns} dataSource={data} />;
    </div>
  )
};

export default TransactionTable