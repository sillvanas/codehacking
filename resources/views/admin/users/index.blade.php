@extends('layouts/admin')
<link href="{{asset('css/app.css')}}" rel="stylesheet">
<link href="{{asset('css/libs.css')}}" rel="stylesheet">


@section('content')

    <h1>user</h1>


    <table class="table">
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
        </tr>
        </thead>
        <tbody>

        @if($users)
            @foreach($users as $user)
                <tr>
                    <td>{{$user->id}}</td>
                    <td>{{$user->name}}</td>
                    <td>{{$user->email}}</td>
                    @if(!$user->role ==null)
                    <td>{{$user->role->name}}</td>
                        @else
                        <td>has not roll</td>
                    @endif
                    <td>{{$user->is_active == 1 ? 'Active':'Not active'}}</td>
                    <td>{{$user->created_at->diffForHumans()}}</td>
                    <td>{{$user->updated_at->diffForHumans()}}</td>
                </tr>

            @endforeach

        @endif

        </tbody>
    </table>


    <script src="{{asset('js/libs.js')}}"></script>
@stop



