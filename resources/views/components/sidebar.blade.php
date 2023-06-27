
<div class="left side-menu">
    <div class="sidebar-inner slimscrollleft">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <ul>
                <li class="menu-title">Navigation</li>

                <li class="has_sub">
                    <a href="dashboard.php" class="waves-effect"><i class="mdi mdi-view-dashboard"></i> <span> Dashboard </span> </a>

                </li>
<li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="ti ti-user"></i> <span> Leader </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('leaders.create') }}">Add Leader</a></li>
                        <li><a href="{{ route('leaders.index') }}">Manage Leader</a></li>
                    </ul>
                </li>




                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-format-list-bulleted"></i> <span> Category </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('categories.create') }}">Add Category</a></li>
                        <li><a href="{{ route('categories.index') }}">Manage Category</a></li>
                    </ul>
                </li>
<li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Institute (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('inst.add_news') }}">Add Institute News</a></li>
                        <li><a href="{{ route('inst.show_news') }}">Manage Institute News</a></li>
                    </ul>
                </li>
                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Nukus (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('nukuses.create') }}">Add Nukus News</a></li>
                        <li><a href="{{ route('nukuses.index') }}">Manage Nukus News</a></li>
                    </ul>
                </li>
                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Ferghana (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('ferghanas.create') }}">Add Ferghana News</a></li>
                        <li><a href="{{ route('ferghanas.index') }}">Manage Ferghana News</a></li>
                    </ul>
                </li>
                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Samarkand (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('samarkands.create') }}">Add Samarkand News</a></li>
                        <li><a href="{{ route('samarkands.index') }}">Manage Samarkand News</a></li>
                    </ul>
                </li>

                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Videolinks (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('videos.create') }}">Add Videolinks News</a></li>
                        <li><a href="{{ route('videos.index') }}">Manage Videolinks News</a></li>
                    </ul>
                </li>
                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Image (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('images.create') }}">Add Image News</a></li>
                        <li><a href="{{ route('images.index') }}">Manage Image News</a></li>
                    </ul>
                </li>
                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Announcement (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('announcements.create') }}">Add Announcement News</a></li>
                        <li><a href="{{ route('announcements.index') }}">Manage Announcement News</a></li>
                    </ul>
                </li>
                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> About Institute </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('abouts.create') }}">Add About Institute</a></li>
                        <li><a href="{{ route('abouts.index') }}">Manage About Institute</a></li>
                    </ul>
                </li>
                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Statute (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('statutes.create') }}">Add Statute News</a></li>
                        <li><a href="{{ route('statutes.index') }}">Manage Statute News</a></li>
                    </ul>
                </li>

                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Structure (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('structures.create') }}">Add Structure News</a></li>
                        <li><a href="{{ route('structures.index') }}">Manage Structure News</a></li>
                    </ul>
                </li>
                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-newspaper"></i> <span> Edu (News) </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('edus.create') }}">Add Edu News</a></li>
                        <li><a href="{{ route('edus.index') }}">Manage Edu News</a></li>
                    </ul>
                </li>
<li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-comment-account-outline"></i> <span> Comments </span> <span class="menu-arrow"></span></a>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('contacts.index') }}">Manage Comments</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>



    </div>


</div>
