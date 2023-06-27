<x-layouts.admin>
@slot('title')
    Admin paneli
@endslot
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<!-- ========== Left Sidebar Start ========== -->
<!-- Left Sidebar End -->
<!-- ============================================================== -->
<!-- Start right Content here -->
<!-- ============================================================== -->
<div class="content-page">
   <!-- Start content -->
   <div class="content">
      <div class="container">
         <div class="row">
            <div class="col-xs-12">
               <div class="page-title-box">
                  <h4 class="page-title">Dashboard</h4>
                  <ol class="breadcrumb p-0 m-0">
                     <li>
                        <a href="#">NewsPortal</a>
                     </li>
                     <li>
                        <a href="#">Admin</a>
                     </li>
                     <li class="active">
                        Dashboard
                     </li>
                  </ol>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
         <!-- end row -->
         <div class="row">
            <div class="col-md-4">
               <div class="card-box h-100">
                  <div class="card-header">
                     <h2 class="card-title mb-2">Welcome Mayuri K.</h2>
                     <span class="d-block mb-4 text-nowrap">Freelancer from India</span>
                  </div>
                  <br><br>

                  <div class="card-body">
                     <div class="row ">
                        <div class="col-md-6">
                           <h1 class="display-6 text-primary mb-2 pt-4 pb-1">7+ Years of Exprience</h1>
                           <small class="d-block mb-3">In <br>PHP, PDO,  Python, Laravel</small>
                           <br>
                           <br>
                           <a href="https://www.mayurik.com/#download_section" target="a_blank" class="btn btn-sm btn-primary">Visit Website</a>
                        </div>
                        <div class="col-md-6">
                           <img src="/assets/images/prize-light.png" width="140" height="150" class="rounded-start">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
               <div class="card-box h-100">
                  <div class="card-body">
                     <div class="row ">
                        <div class="card-header">
                           <h4 class="card-title m-0">Visits of 2023</h4>
                        </div>
                        <div id="chart">
                           <apexchart type="radialBar" height="265" :options="chartOptions" :series="series"></apexchart>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <a href="manage-categories.php">
               <div class="col-lg-2 col-md-2 col-sm-6">
                  <div class="card-box widget-box-one text-center">
                     <i class="mdi mdi-chart-areaspline widget-one-icon"></i>
                     <div class="wigdet-one-content">
                        <p class="m-0 text-secondary" title="Statistics">Categories Listed</p>
                     </div>
                  </div>
               </div>
            </a>
            <!-- end col -->
            <a href="manage-posts.php">
               <div class="col-lg-2 col-md-2 col-sm-6">
                  <div class="card-box widget-box-one text-center">
                     <i class="mdi mdi-layers widget-one-icon"></i>
                     <div class="wigdet-one-content">
                        <p class="m-0 text-secondary" title="User This Month">Live News</p>

                     </div>
                  </div>
               </div>
            </a>
            <a href="manage-subcategories.php">
               <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="card-box widget-box-one text-center">
                     <i class="mdi mdi-layers widget-one-icon"></i>
                     <div class="wigdet-one-content">
                        <p class="m-0 text-secondary" title="User This Month">Listed Subcategories</p>
                     </div>
                  </div>
               </div>
               <!-- end col -->
            </a>

         </div>
         <!-- end row -->
      </div>
      <!-- container -->
   </div>
   <!-- content -->

</div>
<!-- ============================================================== -->
<!-- End Right content here -->
<!-- ============================================================== -->
<!-- Right Sidebar -->
<div class="side-bar right-bar">
   <a href="javascript:void(0);" class="right-bar-toggle">
   <i class="mdi mdi-close-circle-outline"></i>
   </a>
   <h4 class="">Settings</h4>
   <div class="setting-list nicescroll">
      <div class="row m-t-20">
         <div class="col-xs-8">
            <h5 class="m-0">Notifications</h5>
            <p class="text-muted m-b-0"><small>Do you need them?</small></p>
         </div>
         <div class="col-xs-4 text-right">
            <input type="checkbox" checked data-plugin="switchery" data-color="#7fc1fc" data-size="small"/>
         </div>
      </div>
      <div class="row m-t-20">
         <div class="col-xs-8">
            <h5 class="m-0">API Access</h5>
            <p class="m-b-0 text-muted"><small>Enable/Disable access</small></p>
         </div>
         <div class="col-xs-4 text-right">
            <input type="checkbox" checked data-plugin="switchery" data-color="#7fc1fc" data-size="small"/>
         </div>
      </div>
      <div class="row m-t-20">
         <div class="col-xs-8">
            <h5 class="m-0">Auto Updates</h5>
            <p class="m-b-0 text-muted"><small>Keep up to date</small></p>
         </div>
         <div class="col-xs-4 text-right">
            <input type="checkbox" checked data-plugin="switchery" data-color="#7fc1fc" data-size="small"/>
         </div>
      </div>
      <div class="row m-t-20">
         <div class="col-xs-8">
            <h5 class="m-0">Online Status</h5>
            <p class="m-b-0 text-muted"><small>Show your status to all</small></p>
         </div>
         <div class="col-xs-4 text-right">
            <input type="checkbox" checked data-plugin="switchery" data-color="#7fc1fc" data-size="small"/>
         </div>
      </div>
   </div>
</div>
<!-- /Right-bar -->
</div>
<!-- END wrapper -->
<script>
   var options = {
     series: [44, 55, 67],
     chart: {
     height: 265,
     type: 'radialBar',
   },
   plotOptions: {
     radialBar: {
       dataLabels: {
         name: {
           fontSize: '40px',
         },
         value: {
           fontSize: '16px',
         },
         total: {
           show: true,
           label: 'Total',
           formatter: function (w) {
             // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
             return 249
           }
         }
       }
     }
   },
   labels: ['Apples', 'Oranges', 'Bananas'],
   };

   var chart = new ApexCharts(document.querySelector("#chart"), options);
   chart.render();
</script>
</x-layouts.admin>
