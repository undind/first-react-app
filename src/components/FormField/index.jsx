import React from 'react';
import { Form, Icon, Input } from 'antd';

import { validateFields } from 'utils/helpers';

const FormField = ({ name, placeholder, icon, handleChange, handleBlur, size, type, touched, errors, values }) => {
    return (
      <Form.Item 
        validateStatus={validateFields(name, touched, errors)} 
        hasFeedback
        help={!touched[name] ? '' : errors[name]}
      >
        <Input
          prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholder}
          size={size}
          type={type}
          id={name}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
    );
}

export default FormField;
