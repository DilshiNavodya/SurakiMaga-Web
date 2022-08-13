import React from "react";
import './OwnerAdvertiestments.css';

function OwnerAddNewAd (){
    return(
        <>
            <div class="new-Ad-container card" >
                <form class="row g-3 p-3 needs-validation">
                <h4>New Advertiestment</h4>
                <div class="col-md-10">
                    <label for="inputTitle" class="form-label">Title</label>
                    <input type="text" class="form-control" id="inputTitle" required/>
                </div>
                <div class="col-7">
                    <label for="inputSchoolvan" class="form-label">School Van</label>
                    <select id="inputSchoolvan" class="form-select" placeholder="Choose.." required>
                    <option>School van 1</option>
                    <option>School bus 1</option>
                    <option>School van 2</option>
                    </select>
                </div>
                <div class="col-12">
                    <label for="inputLocation" class="form-label">Location</label>
                    <input type="text" class="form-control" id="inputLocation" placeholder="Start Location of Van" required/>
                </div>
                <div class="col-12">
                    <label for="inputDescription" class="form-label">Description</label>
                    <textarea class="form-control" id="inputDescription" rows="3" required></textarea>
                </div>
                <div class="mb-3">
                <label for="formFile" class="form-label">Add image</label>
                <input class="form-control" type="file" id="formFile" required/>
                </div>
                <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                </div>
                </form>
            </div>
        </>
    )
}
export default OwnerAddNewAd;