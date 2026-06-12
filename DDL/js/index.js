document.addEventListener("DOMContentLoaded", () => {

    const appLink = document.getElementById("mobile-app-link");

    if (appLink) {

        appLink.addEventListener("click", (e) => {
            e.preventDefault();
            openAppStore();
        });

    }

});

function openAppStore() {

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Android
    if (/android/i.test(userAgent)) {

        // Replace with your actual Google Play link
        window.location.href =
            "https://play.google.com/store/apps/details?id=YOUR_ANDROID_APP_ID";

        return;
    }

    // iPhone / iPad
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {

        window.location.href =
            "https://apps.apple.com/lb/app/dunkin-leb/id1133058287";

        return;
    }

    // Desktop fallback
    window.location.href =
        "https://ddlebanon.com";
}

let currentPage = 1;

function openUbeModal() {
    document.getElementById("ubeModal").style.display = "flex";
    showPage(currentPage);
}

function closeUbeModal() {
    document.getElementById("ubeModal").style.display = "none";
}

function showPage(page) {

    const pages = document.querySelectorAll(".modal-page");

    pages.forEach(p => {
        p.classList.remove("active");
    });

    document.getElementById("page" + page)
        .classList.add("active");

    document.getElementById("pageIndicator")
        .textContent = page + " / 3";
}

function nextPage() {

    currentPage++;

    if(currentPage > 3){
        currentPage = 1;
    }

    showPage(currentPage);
}

function previousPage() {

    currentPage--;

    if(currentPage < 1){
        currentPage = 3;
    }

    showPage(currentPage);
}

window.addEventListener("click", function(e){

    const modal = document.getElementById("ubeModal");

    if(e.target === modal){
        closeUbeModal();
    }

});


const bottomAppLink =
    document.getElementById("mobile-app-link-bottom");

if(bottomAppLink){

    bottomAppLink.addEventListener("click", (e) => {

        e.preventDefault();
        openAppStore();

    });

}

function goHome() {

    const currentPage =
        window.location.pathname.split("/").pop();

    if (
        currentPage === "" ||
        currentPage === "index.html"
    ) {

        location.reload();

    } else {

        window.location.href = "index.html";

    }
}

function openToters() {

    const userAgent =
        navigator.userAgent ||
        navigator.vendor ||
        window.opera;

    /* Replace with actual Dunkin Toters deep link */
    const totersDeepLink =
        "toters://merchant/dunkin";

    const androidStore =
        "https://play.google.com/store/apps/details?id=com.toters.customer";

    const iosStore =
        "https://apps.apple.com/lb/app/toters-food-grocery-more/id1456031520";

    if(/android/i.test(userAgent)){

        window.location.href = totersDeepLink;

        setTimeout(() => {
            window.location.href = androidStore;
        }, 1500);

        return;
    }

    if(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream){

        window.location.href = totersDeepLink;

        setTimeout(() => {
            window.location.href = iosStore;
        }, 1500);

        return;
    }

    window.open("https://totersapp.com", "_blank");
}

function openContactModal() {
    document.getElementById("contactModal").style.display = "flex";
}

function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
}