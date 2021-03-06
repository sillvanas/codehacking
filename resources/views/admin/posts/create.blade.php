@extends('layouts.admin')

{{--<link href="{{asset('css/libs.css')}}" rel="stylesheet">--}}
{{--<script src="{{asset('js/libs.js')}}"></script>--}}



@section('content')

    <h1>create</h1>

<div class="row">

{!! Form::open(['method'=>'post' , 'action'=>'AdminPostsController@store' ,'files'=>true]) !!}

    <div class="form-group">
        {!! Form::label('title' ,'Title') !!}
        {!! Form::text('title' , null , ['class'=>'form-control']) !!}

    </div>

    <div class="form-group">
        {!! Form::label('category_id' ,'Category') !!}
        {!! Form::select('category_id' ,[''=>'Choose categories'] + $categories
        , null , ['class'=>'form-control']) !!}

    </div>

    <div class="form-group">
        {!! Form::label('photo_id' ,'Photo') !!}
        {!! Form::file('photo_id'  , ['class'=>'form-control']) !!}
    </div>
    <div class="form-group">
         {!! Form::label('body' ,'Describtion') !!}
         {!! Form::textarea('body' , null , ['class'=>'form-control'  ]) !!}
    </div>




<div class="form-group">
    {!! Form::submit('create post !' , ['class'=>'btn btn-primary']) !!}
</div>
{!! Form::close() !!}
</div>





<div class="row">
    @include('includes.form_error')
</div>


@stop