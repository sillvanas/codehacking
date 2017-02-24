@extends('layouts/admin')

<link href="{{asset('css/libs.css')}}" rel="stylesheet">
<script src="{{asset('js/libs.js')}}"></script>


@section('content')


    <h1>{{$user->name}}</h1>
    <br>
    <div class="row">
<div class="col-sm-3">

    <img src="{{$user->photo ? $user->photo->file : '/images/lock.jpg'}}" alt=""
         class="img-responsive img-rounded">
</div>


    <div class="col-sm-9">
        {!! Form::model($user ,[ 'method'=>'patch' , 'action'=>['AdminUsersController@update',$user->id ]
        ,'files'=>true]) !!}
        <div class="form-group">
            {!! Form::label('name' ,'Name :') !!}
            {!! Form::text('name' , null , ['class'=>'form-control']) !!}

        </div>

        <div class="form-group">
            {!! Form::label('email' ,'Email :') !!}
            {!! Form::email('email' , null , ['class'=>'form-control']) !!}
        </div>

        <div class="form-group">
            {!! Form::label('role_id' ,'Role :') !!}
            {!! Form::select('role_id' , $roles , null , ['class'=>'form-control']) !!}
        </div>


        <div class="form-group">
            {!! Form::label('is_active' ,'Status :') !!}
            {!! Form::select('is_active' ,array(1=>'Active' , 0=>'Not Active'), null
            , ['class'=>'form-control']) !!}
        </div>

        <div class="form-group">
            {!! Form::label('photo_id' ,'Photo') !!}
            {!! Form::file('photo_id'  , ['class'=>'form-control']) !!}
        </div>


        <div class="form-group" >
            {!! Form::label('password' ,'Password :') !!}
            {!! Form::password('password',null, ['class'=>'form-control']) !!}
        </div>


        <div class="form-group" style="position: absolute;">
            {!! Form::submit('create user !' , ['class'=>'btn btn-primary']) !!}
        </div>
        {!! Form::close() !!}


        {!! Form::open(['method'=>'delete' , 'action'=>['AdminUsersController@destroy',$user->id]]) !!}

            <div class="form-group pull-right" style="margin-right: 15%; margin-bottom: 10%;">
              {!! Form::submit('Delete user !' , ['class'=>'btn btn-danger']) !!}
            </div>
        {!! Form::close() !!}




    </div>
    </div>
<div class="row">
    @include('includes.form_error')
</div>

@stop