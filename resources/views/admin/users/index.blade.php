@extends('layouts/admin')


@section('content')

    @if(Session::has('deleted_user'))

        <p class="bg bg-danger">{{Session('deleted_user')}}</p>


        @endif
    <h1>user</h1>


    <table class="table">
        <thead>
        <tr>
            <th>Id</th>
            <th>Photo</th>
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

                    <td><img  style="max-height: 100px; max-width: 100px;"
                              class="img-responsive img-rounded"
                              src="{{$user->photo ? $user->photo->file:'/images/lock.jpg' }}"
                             alt="">
                    </td>
                    <td><a href="{{route('users.edit' , $user->id)}}">{{$user->name}}</a></td>
                    <td>{{$user->email}}</td>

                    <td>{{$user->role ? $user->role->name:'has not'}}</td>

                    <td>{{$user->is_active == 1 ? 'Active':'Not active'}}</td>
                    <td>{{$user->created_at->diffForHumans()}}</td>
                    <td>{{$user->updated_at->diffForHumans()}}</td>
                </tr>

            @endforeach

        @endif

        </tbody>
    </table>

@stop



