import React from 'react'
import SideBar from '../../../components/AdminPanelComp/SideBar'
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import CustomButton from '../../../components/CustomButton';
import styles from '../../../style';
const AddProperty = () => {
  return (
    <>
      <SideBar component={<AddPropertyForm />} selectedKey="1" />
    </>
  )
}

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const AddPropertyForm = () => {
  return (
    <div className='md:w-1/2 m-auto'>
      <h1 className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl mb-8`}>Add new Property</h1>


      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
      <h1 className={`${styles.boldText} mb-2`}>Enter property Address</h1>
        <Form.Item
          name="propertyAddress"
          rules={[
            {
              required: true,
              message: 'Please input Property Address',
            },
          ]}
        >
          <Input className='py-3' />
        </Form.Item>


        <h1 className={`${styles.boldText} mb-2`}>Enter property Price</h1>

      
          <Form.Item
            name="propertyPrice"
            rules={[
              {
                required: true,
                message: 'Please input Property Price',
              },
            ]}
          >
            <Input className='py-3' />
          </Form.Item>


          <h1 className={`${styles.boldText} mb-2`}>Enter property Status</h1>

          <Form.Item
            name="propertyStatus"
            rules={[
              {
                required: true,
                message: 'Please input Property propertyStatus',
              },
            ]}
          >
            <Input className='py-3' />
          </Form.Item>

          
          <h1 className={`${styles.boldText} mb-2`}>Enter property Tags</h1>

          <Form.Item
            name="propertyStatus"
            rules={[
              {
                required: true,
                message: 'Please input Property propertyStatus',
              },
            ]}
          >
            <Input className='py-3' />
          </Form.Item>





          <Form.Item>
            <CustomButton type="button" text="Add Property" />
          </Form.Item>
        </Form>
    </div>
  )
}


export default AddProperty