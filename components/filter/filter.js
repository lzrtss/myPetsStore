export const mainFilter = `
  <!-- Sidebar Main Filters -->
  <form id="main-filters" class="d-flex flex-column form-inline my-lg-0">
    <!-- <h5 class="mt-4 text-center">Main Filters</h5> -->

    <div class="form-group justify-content-center">
      <!-- <label for="formControlRange">Price</label> -->
      <!-- <input type="range" class="custom-range" min="0" max="6000" step="1" id="formControlRange"> -->
      <h6 class="font-italic mt-3">filter by price:</h6>
      <input class=" mb-2" type="number" name="min-price" id="min-price" placeholder="Min Price" max="6000">
      <input class="w-35 mb-2" type="number" name="min-price" id="max-price" placeholder="Max Price"
        min="0">
      <button id="apply-price-filter" class="btn btn-outline-dark">Apply filter</button>
    </div>
    <div class="form-group justify-content-center">
      <!-- <label for="formControlRange">Qtity</label>
        <input type="range" class="custom-range" min="0" max="50" step="1" id="formControlRange"> -->
      <h6 class="mt-3 font-italic mt-4">filter by quantity:</h6>
      <input class="w-35 mb-2" type="number" name="min-qty" id="min-qty" placeholder="Min Qty" max="50">
      <input class="w-35 mb-2" type="number" name="min-qty" id="max-qty" placeholder="Max Qty" min="0">
      <button id="apply-qty-filter" class="btn btn-outline-dark">Apply filter</button>
    </div>
  </form>
`;

export const removeFilterBtn = `
  <div class="d-flex flex-row justify-content-center">
  <button id="remove-filters" class="w-100 btn btn-outline-primary justify-content-center my-3">Remove
    All
    Filters</button>
  </div>
`;