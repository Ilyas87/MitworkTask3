<link rel="stylesheet" href="css/bootstrap.min.css">

<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script defer src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script defer src="js/script.js"></script>

<div class="container">
    <div class="d-flex justify-content-center">
        <div class="col-9">
            <nav class="navbar px-0 py-3 border-light">
                <div class="input-group col-4 pl-0">
                    <input type="text" class="form-control" id="searchInput" placeholder="Search...">
                </div>
            </nav>

            <table class="table table-bordered">
                <thead class="bg-primary text-light text-center">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">ROLE</th>
                        <th scope="col">ACTIVE</th>
                        <th scope="col">SETTINGS</th>
                    </tr>
                </thead>
                <tbody id="table">
                </tbody>
            </table>
        </div>
    </div>    
</div>