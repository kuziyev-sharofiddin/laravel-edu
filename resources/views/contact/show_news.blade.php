<x-layouts.admin>
    @slot('title')
        Kontaktlarni boshqarish
    @endslot
<div class="content-page">
<!-- Start content -->
<div class="content">
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
               <h4 class="page-title">Manage Contact </h4>
               <div class="clearfix"></div>
            </div>
         </div>
      </div>
      <!-- end row -->
      <div class="row">
         <div class="col-sm-12">
            <div class="card-box">
               <div class="table-responsive">
                  <table>
                     <thead>
                        <tr>
                            <th>#</th>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Phone</th>
                           <th>Comment</th>
                           <th>Action</th>
                           {{-- <th>Update</th>
                           <th>Delete</th> --}}
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($contacts as $contact)
                        {{-- <tr>
                           <td colspan="4" align="center">
                              <h3 style="color:red">No record found</h3>
                           </td>
                        <tr> --}}

                        <tr>
                           <td>
                            <div style="color:rgb(124,77,255); padding-left: 10px; float: left; font-size: 20px; cursor: pointer;" title="change display order">
                                <i class="fa fa-ellipsis-v"></i>
                                <i class="fa fa-ellipsis-v"></i>
                                </div>
                           </td>
                           <td>{{ $contact->name }}</td>
                           <td>{{ $contact->email }}</td>
                           <td>{{ $contact->phone }}</td>
                           <td>{{ $contact->comment }}</td>
                           <td>
                            <form action="{{ route('contacts.destroy', ['contact'=>$contact->id]) }}" method="POST" onsubmit="return confirm('Rostan ham o\'chirishni xohlaysizmi?')">
                                @csrf
                                @method('DELETE')
                            <button class="btn btn-danger btn-sm" type="submit">Delete</button>
                            </form>
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
