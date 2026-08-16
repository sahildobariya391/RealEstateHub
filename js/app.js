/* ========================================
   REAL ESTATE HUB
   Main JavaScript
======================================== */


/* ========================================
   PROPERTY DATA
======================================== */

const properties = [

    {
        id: 1,

        title: "Luxury 3 BHK Apartment",

        location: "Ahmedabad, Gujarat",

        city: "Ahmedabad",

        type: "Apartment",

        purpose: "Buy",

        price: 7500000,

        bedrooms: 3,

        bathrooms: 2,

        area: 1850,

        year: 2024,

        image:
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=80",

        description:
            "A beautiful modern 3 BHK apartment located in a prime area of Ahmedabad. The property offers spacious rooms, modern interiors and excellent connectivity.",

        amenities: [
            "Parking",
            "Swimming Pool",
            "Gym",
            "Security",
            "Power Backup",
            "Lift"
        ]

    },


    {
        id: 2,

        title: "Modern Family Villa",

        location: "Gandhinagar, Gujarat",

        city: "Gandhinagar",

        type: "Villa",

        purpose: "Buy",

        price: 12500000,

        bedrooms: 4,

        bathrooms: 3,

        area: 3200,

        year: 2023,

        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",

        description:
            "A premium family villa with modern architecture, spacious bedrooms, garden space and excellent amenities.",

        amenities: [
            "Garden",
            "Parking",
            "Security",
            "Smart Home",
            "Terrace",
            "Power Backup"
        ]

    },


    {
        id: 3,

        title: "Premium 2 BHK Apartment",

        location: "Bopal, Ahmedabad",

        city: "Ahmedabad",

        type: "Apartment",

        purpose: "Rent",

        price: 28000,

        bedrooms: 2,

        bathrooms: 2,

        area: 1250,

        year: 2024,

        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",

        description:
            "A premium 2 BHK apartment available for rent in Bopal with excellent connectivity and modern facilities.",

        amenities: [
            "Parking",
            "Gym",
            "Lift",
            "Security",
            "Club House",
            "Water Supply"
        ]

    },


    {
        id: 4,

        title: "Elegant 4 BHK House",

        location: "Satellite, Ahmedabad",

        city: "Ahmedabad",

        type: "House",

        purpose: "Buy",

        price: 18500000,

        bedrooms: 4,

        bathrooms: 4,

        area: 3500,

        year: 2022,

        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80",

        description:
            "A spacious independent house with premium interiors, large bedrooms, parking and excellent neighborhood.",

        amenities: [
            "Parking",
            "Garden",
            "Terrace",
            "Security",
            "Modular Kitchen",
            "Store Room"
        ]

    },


    {
        id: 5,

        title: "Affordable 2 BHK Home",

        location: "Chandkheda, Ahmedabad",

        city: "Ahmedabad",

        type: "Apartment",

        purpose: "Buy",

        price: 4200000,

        bedrooms: 2,

        bathrooms: 2,

        area: 1100,

        year: 2021,

        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",

        description:
            "An affordable and comfortable apartment ideal for families and first-time home buyers.",

        amenities: [
            "Parking",
            "Lift",
            "Security",
            "Water Supply",
            "Power Backup",
            "Play Area"
        ]

    },


    {
        id: 6,

        title: "Premium Corporate Office",

        location: "SG Highway, Ahmedabad",

        city: "Ahmedabad",

        type: "Office",

        purpose: "Rent",

        price: 85000,

        bedrooms: 0,

        bathrooms: 2,

        area: 2400,

        year: 2024,

        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",

        description:
            "A modern commercial office space suitable for startups, IT companies and corporate offices.",

        amenities: [
            "Parking",
            "Reception",
            "Conference Room",
            "Security",
            "Lift",
            "Power Backup"
        ]

    },


    {
        id: 7,

        title: "Luxury 5 BHK Villa",

        location: "Shela, Ahmedabad",

        city: "Ahmedabad",

        type: "Villa",

        purpose: "Buy",

        price: 22500000,

        bedrooms: 5,

        bathrooms: 5,

        area: 4500,

        year: 2024,

        image:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",

        description:
            "An impressive luxury villa featuring spacious rooms, landscaped garden and premium facilities.",

        amenities: [
            "Private Garden",
            "Swimming Pool",
            "Parking",
            "Gym",
            "Security",
            "Smart Home"
        ]

    },


    {
        id: 8,

        title: "Modern 3 BHK Residence",

        location: "Vastrapur, Ahmedabad",

        city: "Ahmedabad",

        type: "House",

        purpose: "Rent",

        price: 45000,

        bedrooms: 3,

        bathrooms: 3,

        area: 1900,

        year: 2023,

        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",

        description:
            "A modern residential property in Vastrapur with excellent connectivity to schools, offices and shopping areas.",

        amenities: [
            "Parking",
            "Garden",
            "Security",
            "Lift",
            "Balcony",
            "Water Supply"
        ]

    }

];


/* ========================================
   LOCAL STORAGE
======================================== */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

}


function saveFavorites(favorites) {

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}


/* ========================================
   FAVORITE COUNT
======================================== */

function updateFavoriteCount() {

    const count =
        getFavorites().length;

    const elements =
        document.querySelectorAll(
            "#favoriteCount"
        );

    elements.forEach(element => {

        element.textContent = count;

    });

}


/* ========================================
   FORMAT PRICE
======================================== */

function formatPrice(price, purpose) {

    if (purpose === "Rent") {

        return "₹" +
            price.toLocaleString("en-IN") +
            " / month";

    }


    if (price >= 10000000) {

        return "₹" +
            (price / 10000000)
                .toFixed(2)
                .replace(".00", "") +
            " Cr";

    }


    if (price >= 100000) {

        return "₹" +
            (price / 100000)
                .toFixed(2)
                .replace(".00", "") +
            " Lakh";

    }


    return "₹" +
        price.toLocaleString("en-IN");

}


/* ========================================
   PROPERTY CARD
======================================== */

function createPropertyCard(property) {

    const favorites =
        getFavorites();

    const isFavorite =
        favorites.includes(property.id);


    return `

        <article class="property-card">

            <div class="property-image">

                <img
                    src="${property.image}"
                    alt="${property.title}"
                    loading="lazy"
                >

                <span class="property-purpose">

                    ${property.purpose}

                </span>


                <button
                    class="favorite-btn
                    ${isFavorite ? "active" : ""}"

                    onclick="
                        toggleFavorite(${property.id})
                    "
                    aria-label="Add to favorites"
                >

                    <i class="bi
                    ${isFavorite
                        ? "bi-heart-fill"
                        : "bi-heart"}">
                    </i>

                </button>

            </div>


            <div class="property-content">

                <span class="property-type">

                    ${property.type}

                </span>


                <h3 class="property-title">

                    ${property.title}

                </h3>


                <div class="property-location">

                    <i class="bi bi-geo-alt"></i>

                    ${property.location}

                </div>


                <div class="property-price">

                    ${formatPrice(
                        property.price,
                        property.purpose
                    )}

                </div>


                <div class="property-features">

                    <span>

                        <i class="bi bi-door-open"></i>

                        ${property.bedrooms}
                        Beds

                    </span>


                    <span>

                        <i class="bi bi-droplet"></i>

                        ${property.bathrooms}
                        Baths

                    </span>


                    <span>

                        <i class="bi bi-rulers"></i>

                        ${property.area}
                        sq.ft

                    </span>

                </div>


                <div class="property-footer">

                    <span>
                        ${property.year}
                    </span>


                    <a
                        href="property-details.html?id=${property.id}"
                        class="details-btn"
                    >

                        View Details

                        <i class="bi bi-arrow-right"></i>

                    </a>

                </div>

            </div>

        </article>

    `;

}


/* ========================================
   TOGGLE FAVORITE
======================================== */

function toggleFavorite(id) {

    let favorites =
        getFavorites();


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "Removed from favorites"
        );

    } else {

        favorites.push(id);

        showToast(
            "Property added to favorites ❤️"
        );

    }


    saveFavorites(favorites);

    updateFavoriteCount();


    /* Refresh property grids */

    if (
        document.getElementById(
            "featuredProperties"
        )
    ) {

        renderFeatured();

    }


    if (
        document.getElementById(
            "allProperties"
        )
    ) {

        applyFilters();

    }


    if (
        document.getElementById(
            "favoriteProperties"
        )
    ) {

        renderFavorites();

    }

}


/* ========================================
   TOAST
======================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* ========================================
   FEATURED PROPERTIES
======================================== */

function renderFeatured() {

    const container =
        document.getElementById(
            "featuredProperties"
        );

    if (!container) return;


    const featured =
        properties.slice(0, 6);


    container.innerHTML =
        featured
            .map(createPropertyCard)
            .join("");

}


/* ========================================
   ALL PROPERTIES
======================================== */

function renderProperties(list) {

    const container =
        document.getElementById(
            "allProperties"
        );

    if (!container) return;


    const noProperties =
        document.getElementById(
            "noProperties"
        );


    const resultCount =
        document.getElementById(
            "propertyResultCount"
        );


    if (resultCount) {

        resultCount.textContent =
            `${list.length} Properties`;

    }


    if (list.length === 0) {

        container.innerHTML = "";

        if (noProperties) {

            noProperties.style.display =
                "block";

        }

        return;

    }


    if (noProperties) {

        noProperties.style.display =
            "none";

    }


    container.innerHTML =
        list
            .map(createPropertyCard)
            .join("");

}


/* ========================================
   FILTER PROPERTIES
======================================== */

function applyFilters() {

    const searchInput =
        document.getElementById(
            "propertySearch"
        );


    const purposeFilter =
        document.getElementById(
            "purposeFilter"
        );


    const typeFilter =
        document.getElementById(
            "typeFilter"
        );


    const priceFilter =
        document.getElementById(
            "priceFilter"
        );


    const sortFilter =
        document.getElementById(
            "sortFilter"
        );


    if (!searchInput) return;


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const purpose =
        purposeFilter.value;


    const type =
        typeFilter.value;


    const price =
        priceFilter.value;


    const sort =
        sortFilter.value;


    let filtered =
        properties.filter(property => {


            const matchesSearch =

                property.title
                    .toLowerCase()
                    .includes(search)

                ||

                property.location
                    .toLowerCase()
                    .includes(search)

                ||

                property.type
                    .toLowerCase()
                    .includes(search);


            const matchesPurpose =

                purpose === "all"

                ||

                property.purpose === purpose;


            const matchesType =

                type === "all"

                ||

                property.type === type;


            let matchesPrice = true;


            if (price !== "all") {

                const range =
                    price.split("-");

                const min =
                    Number(range[0]);

                const max =
                    Number(range[1]);


                matchesPrice =

                    property.price >= min
                    &&
                    property.price <= max;

            }


            return (
                matchesSearch
                &&
                matchesPurpose
                &&
                matchesType
                &&
                matchesPrice
            );

        });


    /* SORT */

    if (sort === "low") {

        filtered.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort === "high") {

        filtered.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    renderProperties(filtered);

}


/* ========================================
   FAVORITES PAGE
======================================== */

function renderFavorites() {

    const container =
        document.getElementById(
            "favoriteProperties"
        );

    if (!container) return;


    const empty =
        document.getElementById(
            "emptyFavorites"
        );


    const favorites =
        getFavorites();


    const favoriteProperties =
        properties.filter(
            property =>
                favorites.includes(property.id)
        );


    if (
        favoriteProperties.length === 0
    ) {

        container.innerHTML = "";

        if (empty) {

            empty.style.display =
                "block";

        }

        return;

    }


    if (empty) {

        empty.style.display =
            "none";

    }


    container.innerHTML =
        favoriteProperties
            .map(createPropertyCard)
            .join("");

}


/* ========================================
   PROPERTY DETAILS
======================================== */

function renderDetails() {

    const container =
        document.getElementById(
            "propertyDetails"
        );

    if (!container) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(
            params.get("id")
        );


    const property =
        properties.find(
            item => item.id === id
        );


    if (!property) {

        container.innerHTML = `

            <div class="empty-state"
                 style="display:block">

                <i class="bi bi-house-x"></i>

                <h2>
                    Property Not Found
                </h2>

                <p>
                    The property you're looking
                    for does not exist.
                </p>

                <a
                    href="properties.html"
                    class="primary-btn"
                >

                    Browse Properties

                </a>

            </div>

        `;

        return;

    }


    document.title =
        `${property.title} - RealEstateHub`;


    const title =
        document.getElementById(
            "detailTitle"
        );


    const location =
        document.getElementById(
            "detailLocation"
        );


    if (title)
        title.textContent =
            property.title;


    if (location)
        location.textContent =
            property.location;


    const favorites =
        getFavorites();


    const isFavorite =
        favorites.includes(property.id);


    container.innerHTML = `

        <div>

            <img
                class="details-image"
                src="${property.image}"
                alt="${property.title}"
            >

        </div>


        <div class="details-info">

            <span class="property-type">

                ${property.purpose}
                FOR ${property.type}

            </span>


            <h2>

                ${property.title}

            </h2>


            <div class="details-location">

                <i class="bi bi-geo-alt"></i>

                ${property.location}

            </div>


            <div class="details-price">

                ${formatPrice(
                    property.price,
                    property.purpose
                )}

            </div>


            <div class="details-features">

                <div class="detail-feature">

                    <i class="bi bi-door-open"></i>

                    <span>

                        <strong>
                            ${property.bedrooms}
                        </strong>

                        <br>

                        Bedrooms

                    </span>

                </div>


                <div class="detail-feature">

                    <i class="bi bi-droplet"></i>

                    <span>

                        <strong>
                            ${property.bathrooms}
                        </strong>

                        <br>

                        Bathrooms

                    </span>

                </div>


                <div class="detail-feature">

                    <i class="bi bi-rulers"></i>

                    <span>

                        <strong>
                            ${property.area}
                        </strong>

                        <br>

                        Sq. Ft.

                    </span>

                </div>


                <div class="detail-feature">

                    <i class="bi bi-calendar"></i>

                    <span>

                        <strong>
                            ${property.year}
                        </strong>

                        <br>

                        Built Year

                    </span>

                </div>

            </div>


            <p>

                ${property.description}

            </p>


            <div class="amenities">

                <h3>
                    Amenities
                </h3>


                <div class="amenity-grid">

                    ${property.amenities
                        .map(
                            amenity => `
                                <div>

                                    <i class="bi bi-check-circle"></i>

                                    ${amenity}

                                </div>
                            `
                        )
                        .join("")}

                </div>

            </div>


            <div style="
                display:flex;
                gap:10px;
                margin-top:25px;
            ">

                <button
                    class="primary-btn"
                    onclick="
                        toggleFavorite(${property.id})
                    "
                >

                    <i class="bi
                        ${
                            isFavorite
                            ? "bi-heart-fill"
                            : "bi-heart"
                        }">
                    </i>

                    ${
                        isFavorite
                        ? "Remove Favorite"
                        : "Add to Favorite"
                    }

                </button>


                <a
                    href="index.html#contact"
                    class="primary-btn"
                >

                    Contact Owner

                </a>

            </div>

        </div>

    `;

}


/* ========================================
   THEME
======================================== */

function setupTheme() {

    const button =
        document.getElementById(
            "themeToggle"
        );


    const savedTheme =
        localStorage.getItem(
            "theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

    }


    if (!button) return;


    updateThemeIcon();


    button.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );


            const theme =
                document.body.classList.contains(
                    "dark"
                )
                    ? "dark"
                    : "light";


            localStorage.setItem(
                "theme",
                theme
            );


            updateThemeIcon();

        }
    );

}


function updateThemeIcon() {

    const button =
        document.getElementById(
            "themeToggle"
        );


    if (!button) return;


    const icon =
        button.querySelector("i");


    if (
        document.body.classList.contains(
            "dark"
        )
    ) {

        icon.className =
            "bi bi-sun";

    } else {

        icon.className =
            "bi bi-moon";

    }

}


/* ========================================
   MOBILE MENU
======================================== */

function setupMenu() {

    const menuButton =
        document.getElementById(
            "menuToggle"
        );


    const nav =
        document.getElementById(
            "navMenu"
        );


    if (!menuButton || !nav)
        return;


    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "show"
            );

        }
    );


    nav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "show"
                    );

                }
            );

        });

}


/* ========================================
   CONTACT FORM
======================================== */

function setupContactForm() {

    const form =
        document.getElementById(
            "contactForm"
        );


    if (!form) return;


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                ).value.trim();


            const email =
                document.getElementById(
                    "contactEmail"
                ).value.trim();


            const phone =
                document.getElementById(
                    "contactPhone"
                ).value.trim();


            const message =
                document.getElementById(
                    "contactMessage"
                ).value.trim();


            if (
                !name ||
                !email ||
                !phone ||
                !message
            ) {

                showToast(
                    "Please fill all fields"
                );

                return;

            }


            if (phone.length < 10) {

                showToast(
                    "Please enter a valid phone number"
                );

                return;

            }


            const inquiries =
                JSON.parse(
                    localStorage.getItem(
                        "inquiries"
                    )
                ) || [];


            inquiries.push({

                name,

                email,

                phone,

                message,

                date:
                    new Date()
                        .toLocaleString()

            });


            localStorage.setItem(
                "inquiries",
                JSON.stringify(
                    inquiries
                )
            );


            showToast(
                "Inquiry submitted successfully!"
            );


            form.reset();

        }
    );

}


/* ========================================
   HERO SEARCH
======================================== */

function setupHeroSearch() {

    const button =
        document.getElementById(
            "heroSearch"
        );


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            const location =
                document.getElementById(
                    "heroLocation"
                ).value;


            const purpose =
                document.getElementById(
                    "heroPurpose"
                ).value;


            const params =
                new URLSearchParams();


            if (location) {

                params.set(
                    "search",
                    location
                );

            }


            if (purpose !== "all") {

                params.set(
                    "purpose",
                    purpose
                );

            }


            window.location.href =
                "properties.html?" +
                params.toString();

        }
    );

}


/* ========================================
   URL FILTER
======================================== */

function loadUrlFilters() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const search =
        params.get("search");


    const purpose =
        params.get("purpose");


    const type =
        params.get("type");


    const searchInput =
        document.getElementById(
            "propertySearch"
        );


    const purposeFilter =
        document.getElementById(
            "purposeFilter"
        );


    const typeFilter =
        document.getElementById(
            "typeFilter"
        );


    if (search && searchInput) {

        searchInput.value = search;

    }


    if (
        purpose &&
        purposeFilter
    ) {

        purposeFilter.value =
            purpose;

    }


    if (
        type &&
        typeFilter
    ) {

        typeFilter.value =
            type;

    }

}


/* ========================================
   INITIALIZATION
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* Theme */

        setupTheme();


        /* Mobile Menu */

        setupMenu();


        /* Favorite Counter */

        updateFavoriteCount();


        /* Home */

        renderFeatured();


        /* Properties */

        if (
            document.getElementById(
                "allProperties"
            )
        ) {

            loadUrlFilters();

            renderProperties(
                properties
            );


            const filters = [
                "propertySearch",
                "purposeFilter",
                "typeFilter",
                "priceFilter",
                "sortFilter"
            ];


            filters.forEach(id => {

                const element =
                    document.getElementById(id);


                if (element) {

                    element.addEventListener(
                        "input",
                        applyFilters
                    );


                    element.addEventListener(
                        "change",
                        applyFilters
                    );

                }

            });


            applyFilters();

        }


        /* Favorites */

        renderFavorites();


        /* Details */

        renderDetails();


        /* Contact */

        setupContactForm();


        /* Hero */

        setupHeroSearch();

    }
);