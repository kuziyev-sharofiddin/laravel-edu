<x-layouts.admin>
    @slot('title')
    Institute News ma'lumotlarini  boshqarish
    @endslot
<div class="content-page">
<!-- Start content -->
<div class="content">
   <div class="container">
      <div class="row">
         <div class="col-xs-12">
            <div class="page-title-box">
               <h4 class="page-title">Manage Institute News </h4>
               <ol class="breadcrumb p-0 m-0">
                  <li>
                     <a href="#">Admin</a>
                  </li>
                  <li>
                    <a href="{{ route('inst.add_news') }}">Add Leader</a>
                 </li>
                  <li class="active">
                     Manage Institute News
                  </li>
               </ol>
               <div class="clearfix"></div>
            </div>
         </div>
      </div>
      <!-- end row -->
      <div class="row">
         <div class="col-sm-12">
            <div class="card-box">
               <div class="table-responsive">
                  <table class="table table-bordered" id="example">
                     <thead>
                        <tr>
                            <th>Id</th>
                           <th>Title</th>
                           <th>Description</th>
                           <th>Photo</th>
                           <th>Action</th>
                           {{-- <th>Update</th>
                           <th>Delete</th> --}}
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($posts as $post)
                        {{-- <tr>
                           <td colspan="4" align="center">
                              <h3 style="color:red">No record found</h3>
                           </td>
                        <tr> --}}

                        <tr>
                           <td>{{ $post->id }}</td>
                           <td>{{ $post->title }}</td>
                           <td>{{ $post->description }}</td>
                           <td><div>
                            <img style="width: 150px; height:150px;" class="top" src="{{ asset('storage/'.$post->photo) }}" alt="">
                        </div></td>
                           {{-- @canany(['update-post', 'delete-post' ], $post) --}}
                           <td><div><a  class="btn btn-primary btn-sm" href="{{ route('inst.edit_news', ['post'=>$post->id]) }}"><i class="fa fa-pencil"></i></a>
                            <form action="{{ route('inst.destroy_news', ['post'=>$post->id]) }}" method="POST" onsubmit="return confirm('Rostan ham o\'chirishni xohlaysizmi?')">
                                @csrf
                                @method('DELETE')
                            <button class="btn btn-danger btn-sm" type="submit">Delete</button>
                            </form>
                            </div>
                           </td>
                           {{-- @endcan --}}
                        </tr>
                        @endforeach
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- container -->
</div>
</x-layouts.admin>
