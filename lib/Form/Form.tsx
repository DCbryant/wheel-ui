import React, { ReactFragment, FormEventHandler, FormEvent, ChangeEvent } from 'react';

export interface FormValue {
	[K: string]: any;
}

import Input from '../Input/Input';
import classes from '../helpers/classes';
import './form.scss';

interface Props {
	value: FormValue;
	fields: Array<{ name: string; label: string; input: { type: string } }>;
	buttons: ReactFragment;
	onSubmit: FormEventHandler;
	onChange: (value: FormValue) => void;
	errors: { [K: string]: string[] };
	errorsDisplayMode?: 'first' | 'all';
	transformError?: (message: string) => string;
}

const Form: React.FunctionComponent<Props> = (props) => {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.onSubmit(e);
	};
	const formData = props.value;
	const onInputChange = (name: string, e: ChangeEvent<HTMLInputElement>) => {
		const newFormValue = { ...formData, [name]: e.target.value };
		props.onChange(newFormValue);
	};
	const transformError = (message: string) => {
    const map: any = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长',
    };
    return props.transformError && props.transformError(message) || map[message] || '未知错误';
  };
	return (
		<form onSubmit={onSubmit}>
			<table className={classes('wheel-form-table')}>
      <tbody>
				{props.fields.map((field, fieldIndex) => {
					return (
						<tr key={fieldIndex} className={classes('wheel-form-tr')}>
							<td className={classes('wheel-form-td')}>
								<span className={classes('wheel-form-label')}>{field.label}</span>
							</td>
							<td className={classes('wheel-form-td')}>
								<Input
									className={classes('wheel-form-input')}
									type={field.input.type}
									value={formData[field.name]}
									onChange={onInputChange.bind(null, field.name)}
								/>
								<div className={classes('wheel-form-error')}>
									{
                    props.errors[field.name] ?
                    (props.errorsDisplayMode === 'first' ?
                      transformError!(props.errors[field.name][0]) : props.errors[field.name].map(transformError!).join()) :
                    <span>&nbsp;</span>
                  }
								</div>
							</td>
						</tr>
					);
				})}

				<tr className="wheel-form-tr">
					<td className="wheel-form-td" />
					<td className="wheel-form-td">{props.buttons}</td>
				</tr>
        </tbody>
			</table>
		</form>
	);
};

Form.defaultProps = {
	errorsDisplayMode: 'first'
};

export default Form;
