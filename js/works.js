const works = {
    hercule: base.vote.hercule,
    cesar: base.vote.cesar,
    life: {
        name: "Hercule",
        job: "Demi-dieu",
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true
    }, randomPseudo(prenom, departmentNumber) {
        return `${prenom}-du-${departmentNumber}`
    },
    hourDisponibility() {
        if (base.getHour() >= 8 && base.getHour() <= 20) {

            const disponibility = document.querySelector("#availability")
            disponibility.textContent = "Disponible"
            disponibility.classList.add("availability")

        } else {

            const disponibility = document.querySelector("#availability")
            disponibility.classList.add("off")

        }
    },
    tabHerculeFriends: ["Jupiter", "Junon", "Alcmène", "Déjanire"],
    showWorks() {
        for (let index = 0; index != 12; index++) {
            base.displayWork(index)
        }

    }, calcPopularity(hercule_or_cesar) {
        return Math.round((hercule_or_cesar / (works.hercule + works.cesar)) * 100);
    }, init() {

        base.fillProfil();

        base.printFriends(works.tabHerculeFriends);

        base.setBestFriend(works.tabHerculeFriends[0]);

        const myH1Element = document.createElement("h1");
        myH1Element.className = "banner__title";
        myH1Element.textContent = "Vous consultez le profil de Hercule";
        document.querySelector("#header-banner").append(myH1Element);

        works.showWorks();
        works.hourDisponibility();

        document.querySelector("#profil-name").textContent = works.randomPseudo(works.life.name, works.life.department);

        const menuToggler = document.querySelector("#menu-toggler");

        menuToggler.addEventListener("click", () => {
            document.querySelector("#header-banner").classList.toggle("banner--open")
        })

        const contactDiv = document.querySelector("#contact");

        contactDiv.addEventListener("submit", (event) => {
            alert("Hercule ne souhaite pas être dérangé");
            event.preventDefault();

        })

        document.querySelector("#trends-hercule .people__popularity").textContent = `${works.calcPopularity(works.hercule)}%`;
        document.querySelector("#trends-cesar .people__popularity").textContent = `${works.calcPopularity(works.cesar)}%`;


        const barHercule = document.querySelector("#trends-hercule .people__bar");
        barHercule.style.width = works.calcPopularity(works.hercule) + "%";

        const barCesar = document.querySelector("#trends-cesar .people__bar");
        barCesar.style.width = works.calcPopularity(works.cesar) + "%";

    }



}

works.init();