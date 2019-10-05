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

export const additionalFiltersCats = `
<!-- Sidebar Additional Filters For Cats -->
<form id="add-filters-cats" class="d-flex flex-column my-2 my-lg-0">
  <h5 class="mt-3">Cats:</h5>

  <h6 class="font-italic">Gender:</h6>
  <div class="form-check">
    <input class="cat-add-filter gender form-check-input" type="checkbox" value="male" id="male">
    <label class="form-check-label" for="male">
      male
    </label>
  </div>
  <div class="form-check">
    <input class="cat-add-filter gender form-check-input" type="checkbox" value="female" id="female">
    <label class="form-check-label" for="female">
      female
    </label>
  </div>

  <h6 class="mt-2 font-italic">Hair:</h6>
  <div class="form-check">
    <input class="cat-add-filter fur form-check-input" type="checkbox" value="bald" id="bald">
    <label class="form-check-label" for="bald">
      bald
    </label>
  </div>
  <div class="form-check">
    <input class="cat-add-filter fur form-check-input" type="checkbox" value="short" id="short">
    <label class="form-check-label" for="short">
      short
    </label>
  </div>
  <div class="form-check">
    <input class="cat-add-filter fur form-check-input" type="checkbox" value="middle" id="middle">
    <label class="form-check-label" for="middle">
      middle
    </label>
  </div>
  <div class="form-check">
    <input class="cat-add-filter fur form-check-input" type="checkbox" value="long" id="long">
    <label class="form-check-label" for="long">
      long
    </label>
  </div>

</form>
`;

export const additionalFiltersDogs = `
<!-- Sidebar Additional Filters For Dogs -->
  <form id="add-filters-dogs" class="d-flex flex-column my-2 my-lg-0">
    <h5 class="mt-3">Dogs:</h5>

    <h6 class="font-italic">Size:</h6>
    <div class="form-check">
      <input class="dog-add-filter weightKg form-check-input" type="checkbox" value="small" id="small">
      <label class="form-check-label" for="small-dogs">
        small (5kg-)
      </label>
    </div>
    <div class="form-check">
      <input class="dog-add-filter weightKg form-check-input" type="checkbox" value="middle" id="middle">
      <label class="form-check-label" for="middle-dogs">
        middle (5-25kg)
      </label>
    </div>
    <div class="form-check">
      <input class="dog-add-filter weightKg form-check-input" type="checkbox" value="big" id="big">
      <label class="form-check-label" for="big-dogs">
        big (25kg+)
      </label>
    </div>

    <h6 class="mt-2 font-italic">Specialization:</h6>
    <div class="form-check">
      <input class="dog-add-filter specialization form-check-input" type="checkbox" value="decorate" id="decorate">
      <label class="form-check-label" for="decorate">
        decorate
      </label>
    </div>
    <div class="form-check">
      <input class="dog-add-filter specialization form-check-input" type="checkbox" value="domestic" id="domestic">
      <label class="form-check-label" for="domestic">
        domestic
      </label>
    </div>
    <div class="form-check">
      <input class="dog-add-filter specialization dog-add-filter form-check-input" type="checkbox"
        value="guard" id="guard">
      <label class="form-check-label" for="guard">
        guard
      </label>
    </div>
    <div class="form-check">
      <input class="dog-add-filter specialization dog-add-filter form-check-input" type="checkbox"
        value="hunting" id="hunting">
      <label class="form-check-label" for="hunting">
        hunting
      </label>
    </div>

  </form>
`;

export const additionalFiltersFishes = `
<!-- Sidebar Additional Filters For Fishes -->
<form id="add-filters-fishes" class="additional-filters d-flex flex-column my-2 my-lg-0">
  <h5 class="mt-3">Fishes:</h5>

  <h6 class="font-italic">Zonality:</h6>
  <div class="form-check">
    <input class="fish-add-filter zonality form-check-input" type="checkbox" value="up" id="up-fishes">
    <label class="form-check-label" for="up-fishes">
      up
    </label>
  </div>
  <div class="form-check">
    <input class="fish-add-filter zonality form-check-input" type="checkbox" value="mid" id="middle-fishes">
    <label class="form-check-label" for="middle-fishes">
      middle
    </label>
  </div>
  <div class="form-check">
    <input class="fish-add-filter zonality form-check-input" type="checkbox" value="down" id="down-fishes">
    <label class="form-check-label" for="down-fishes">
      down
    </label>
  </div>

  <h6 class="mt-2 font-italic">Water:</h6>
  <div class="form-check">
    <input class="fish-add-filter freshwater form-check-input" type="checkbox" value="true" id="fresh-water">
    <label class="form-check-label" for="fresh">
      fresh-water
    </label>
  </div>
  <div class="form-check">
    <input class="fish-add-filter freshwater form-check-input" type="checkbox" value="false" id="salt-water">
    <label class="form-check-label" for="salt">
      salt-water
    </label>
  </div>

</form>
`;

export const additionalFiltersBirds = `
<!-- Sidebar Additional Filters For Birds -->
  <form id="add-filters-birds" class="d-flex flex-column my-2 my-lg-0">
    <h5 class="mt-3">Birds:</h5>

    <h6 class="font-italic">Talking:</h6>
    <div class="form-check">
      <input class="bird-add-filter form-check-input" type="checkbox" value="talk-true" id="talk-true">
      <label class="form-check-label" for="talk-true">
        can talk
      </label>
    </div>
    <div class="form-check">
      <input class="bird-add-filter form-check-input" type="checkbox" value="talk-false" id="talk-false">
      <label class="form-check-label" for="talk-false">
        can't talk
      </label>
    </div>

    <h6 class="mt-2 font-italic">Food:</h6>
    <div class="form-check">
      <input class="bird-add-filter form-check-input" type="checkbox" value="predatory" id="predatory">
      <label class="form-check-label" for="predatory">
        predatory
      </label>
    </div>
    <div class="form-check">
      <input class="bird-add-filter form-check-input" type="checkbox" value="non-predatory" id="non-predatory">
      <label class="form-check-label" for="non-predatory">
        non-predatory
      </label>
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