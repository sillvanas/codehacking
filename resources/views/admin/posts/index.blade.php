
@extends('layouts.admin')

<link href="{{asset('css/libs.css')}}" rel="stylesheet">
<script src="{{asset('js/libs.js')}}"></script>


@section('content')

<h1>posts</h1>



<table class="table">
    <thead>
    <tr>
        <th>Id</th>
        <th>Photo</th>
        <th>owner</th>
        <th>Category</th>

        <th>Title</th>
        <th>Body</th>
        <th>Created</th>
        <th>Updated</th>

    </tr>
    </thead>
@if($posts)
    @foreach($posts as $post)
            <tbody>
              <tr>
                <td>{{$post->id}}</td>
                  <td><img src="{{$post->photo ? $post->photo->file :'/images/lock.jpg'}}"
                           alt="" class="img-responsive img-rounded" style="max-height: 50px"></td>
                <td>{{$post->user->name}}</td>
                <td>{{$post->category_id}}</td>

                <td>{{$post->title}}</td>
                <td>{{$post->body}}</td>
                <td>{{$post->created_at->diffForHumans()}}</td>
                  {{--carbon--}}
                <td>{{$post->updated_at->diffForHumans()}}</td>

              </tr>
           </tbody>
    @endforeach
 @endif
</table>



@stop