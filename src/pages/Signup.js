import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { withRouter } from 'react-router-dom';
import axios from '../services/axios';

const Signup = (props) => {
  const alert = useAlert();
  const [registerData, setRegisterData] = useState({
    user_type: "company",
    email: "",
    password: "",
    company_name: ""
  });
  const [sending, setSending] = useState(false);

  const onChangeFormData = (e, field) => {
    const newData = Object.assign({}, registerData);
    newData[field] = e.target.value;

    setRegisterData(newData);
  }

  const onSubmitData = async (e) => {
    e.preventDefault();
    console.log('data yg akan dikirim', registerData);

    try {
      setSending(true);
      const resp = await axios.post('/external/users/signup', registerData);
      alert.success('Dafar berhasil');
      setSending(false);

      props.history.push('/signin');
    } catch (err) {
      alert.error('Dafar gagal');
      setSending(false);
    }
  }

  return (
    <div className="container">
      <h1>Mari Bergabung</h1>
      <form onSubmit={onSubmitData}>
        <div className="form-group">
          <label className="control-label">Nama Perusahaan</label>
          <input className="form-control" disabled={sending} value={registerData.company_name} onChange={(e) => onChangeFormData(e, 'company_name')} />
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input className="form-control" disabled={sending} value={registerData.email} onChange={(e) => onChangeFormData(e, 'email')}/>
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input className="form-control" disabled={sending} value={registerData.password} type="password" onChange={(e) => onChangeFormData(e, 'password')} />
        </div>

        <button className="btn-primary" disabled={sending} type="submit">
          { sending? 'Mengirim...' : 'Daftar' }
        </button>
      </form>
    </div>
  )
}

export default withRouter(Signup);
