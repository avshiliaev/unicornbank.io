import React from 'react';
import {Button, Form, Icon, Input} from 'antd';

const ProjectsForm = ({form, mutate}) => {

    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                mutate({variables: {input: [values]}})
            }
        });
    };

    const {getFieldDecorator} = form;

    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('title', {
                    rules: [{required: true, message: 'Please input a title of your project'}],
                })(
                    <Input
                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Title"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Add Project
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProjectsForm;
