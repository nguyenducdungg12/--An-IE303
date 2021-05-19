import React,{useEffect,useState} from 'react'
import './Profile.css'
import {useDispatch,useSelector} from 'react-redux'
import *as action from '../../actions/user'
import axiosClient from '../../helper/axiosClient'
import { toast } from 'react-toastify'
function Profile(props) {
    const dispatch = useDispatch();
    const [valueForm, setvalueForm] = useState({
        image:"",
        ngaysinh:"",
        sex:1, //1 Nam 2 nữ
        phone:"",
        currentPassword:"",
        newPassword : "",
    })
    const {history} = props;
    const user = useSelector(state => state.user);
    useEffect(() => {
        if(user){
            setvalueForm({
                ...valueForm,
                phone:user.phone,
                sex : user.sex||"",
                ngaysinh : user.ngaysinh||"",
            })
        }
      if(!user){
          history.push("/");
      }
    },[user])
    function onChangeForm(e){
        setvalueForm({
            ...valueForm,
            [e.target.name] : e.target.value,
        })
    }
    function onSubmitForm(e){
        e.preventDefault();
        var form = new FormData();
        form.append("image",valueForm.image);
        form.append("phone",valueForm.phone);
        form.append("sex",valueForm.sex);
        form.append("ngaysinh",valueForm.ngaysinh);
        form.append("currentPassword",valueForm.currentPassword);
        form.append("newPassword",valueForm.newPassword);
        axiosClient({
            url : "http://localhost:8080/api/auth/user/update",
            method:"post",
            data : form,
        }).then(data=>{
           if(data.statusCode==200){
               toast.success(data.msg);
               dispatch(action.getApiUser());
           }
           else{
            toast.error(data.msg);
           }
        });
    }
    function onChangeImage(e){
        setvalueForm({
            ...valueForm,
            image : e.target.files[0],
        })
    }
    console.log(user);
    console.log(valueForm);
    return ( user&&
        <div class="container bootstrap snippets bootdeys">
            <div class="row">
                <div class="col-12 p-5">
                    <h3 className="profile-title text-center mb-5">Thông tin cá nhân</h3>
                    <form class="form-horizontal" onSubmit={onSubmitForm}>
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <img src={user.image} class="img-circle profile-avatar" alt="User avatar" />
                                <input type="file" class=""name="image" accept="image/*" onChange={onChangeImage}/>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            
                            <div class="panel-body">
                            <div class="form-group">
                                    <label class="col-sm-2 control-label">Tài khoản</label>
                                    <div class="col-sm-10">
                                    <input type="text" class="form-control custom-form" value={user.username}disabled/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Email</label>
                                    <div class="col-sm-10">
                                    <input type="text" value={user.email} disabled class="form-control custom-form" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Số điện thoại</label>
                                    <div class="col-sm-10">
                                    <input type="text" class="form-control custom-form" name="phone" value={valueForm.phone} onChange = {onChangeForm}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Giới tính</label>
                                    <div class="col-sm-10">
                                    <input type="radio" id="male" name = "sex" checked={valueForm.sex==1 ? true : false} onChange = {onChangeForm} className="mx-2" value={1}/>
                                    <label htmlFor="male">Nữ</label>
                                    <input type="radio" id="female"name = "sex" checked={valueForm.sex==2 ? true : false} onChange = {onChangeForm} className="mx-2" value={2} />
                                    <label htmlFor="female">Nam</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Ngày sinh</label>
                                    <div class="col-sm-10">
                                    <input type="date" name="ngaysinh" value={valueForm.ngaysinh} onChange = {onChangeForm} class="form-control custom-form" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title" style={{color:"#333"}}>Bảo mật</h4>
                            </div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Mất khẩu hiện tại</label>
                                    <div class="col-sm-10">
                                        <input type="password" name="currentPassword" onChange = {onChangeForm} class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Mật khẩu mới</label>
                                    <div class="col-sm-10">
                                        <input type="password" name ="newPassword" onChange = {onChangeForm}  class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-10 col-sm-offset-2">
                                        <button type="submit" class="btn btn-primary mr-4">Lưu</button>
                                        <button type="reset" class="btn btn-secondary">Hủy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
