import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const ProjectsForm = ({ mutate }) => {

  // const form = React.createRef();
  //
  // const handleSubmit = async (e) => {
  //     await e.preventDefault();
  //     await form.current.validateFields((err, values) => {
  //         if (!err) {
  //             mutate({variables: {input: [values]}})
  //         }
  //     });
  //     await navigate('/')
  // };
  //
  // const {getFieldDecorator} = form;
  //
  // return (
  //     <Form ref={form} onFinish={handleSubmit}>
  //         <h4>Create a new project</h4>
  //         <Form.Item>
  //             {getFieldDecorator('title', {
  //                 rules: [{
  //                     required: true,
  //                     message: 'Please input a valid title (max 25 char.)',
  //                     min: 1,
  //                     max: 25,
  //                     whitespace: true,
  //                 }],
  //             })(
  //                 <Input
  //                     placeholder="Title"
  //                 />,
  //             )}
  //         </Form.Item>
  //         <Form.Item>
  //             {getFieldDecorator('description', {
  //                 rules: [{
  //                     required: true,
  //                     message: 'Please input a valid description (max 140 char.)',
  //                     min: 1,
  //                     max: 140,
  //                     whitespace: true,
  //                 }],
  //             })(
  //                 <TextArea
  //                     rows={4}
  //                     placeholder="Description"
  //                 />
  //             )}
  //         </Form.Item>
  //         <Form.Item>
  //             <Button htmlType="submit" block data-testid={'add-button'}>
  //                 Add Project
  //             </Button>
  //         </Form.Item>
  //     </Form>
  // );

  return (<div>Form here</div>);
};

export default ProjectsForm;
