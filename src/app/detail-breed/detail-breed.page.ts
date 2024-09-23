import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatService } from '../shared/services/cat.service';
import { IBreed } from '../shared/interfaces/breed';

@Component({
    selector: 'app-detail-breed',
    templateUrl: './detail-breed.page.html',
    styleUrls: ['./detail-breed.page.scss'],
})
export class DetailBreedPage implements OnInit {
    private breedId!: string;
    public breed?: IBreed;
    public activeAnimation: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private catService: CatService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.breedId = params['id'];
            this.getBreedDetails(this.breedId);
        });
    }

    getBreedDetails(id: string) {
        this.catService.getBreedById(id).subscribe({
            next: (result) => {
                this.breed = result;
                this.setInfoBreed();
                console.log(this.breed);
            },
            error: (err) => {
                console.error(err);
                this.router.navigate(['/home']);
            }
        });
    }

    setInfoBreed() {
        if (this.breed) {
            this.breed.temperamentArr = this.breed.temperament.split(',').map(t => t.trim());

            this.setCards();
            this.setFeatures();
        }
    }

    setCards() {
        if (this.breed) {
            this.breed.cardsInfo = [
                {
                    id: "weight",
                    name: "Weight",
                    value: this.breed.weight.metric + 'kg',
                    icon: "speedometer-outline",
                },
                {
                    id: "life_span",
                    name: "Life Span",
                    value: this.breed.life_span + 'years',
                    icon: "hourglass-outline",
                },
                {
                    id: "origin",
                    name: "Origin",
                    value: this.breed.origin,
                    icon: "earth-outline",
                },
            ];
        }
    }

    setFeatures() {
        if (this.breed) {
            this.breed.features = [
                {
                    id: "adaptability",
                    name: "Adaptability",
                    value: this.breed.adaptability,
                },
                {
                    id: "affection_level",
                    name: "Affection Level",
                    value: this.breed.affection_level,
                },
                {
                    id: "energy_level",
                    name: "Energy Level",
                    value: this.breed.energy_level,
                },
                {
                    id: "grooming",
                    name: "Grooming",
                    value: this.breed.grooming,
                },
                {
                    id: "health_issues",
                    name: "Health Issues",
                    value: this.breed.health_issues,
                },
                {
                    id: "intelligence",
                    name: "Intelligence",
                    value: this.breed.intelligence,
                },
                {
                    id: "shedding_level",
                    name: "Shedding Level",
                    value: this.breed.shedding_level,
                },
                {
                    id: "social_needs",
                    name: "Social Needs",
                    value: this.breed.social_needs,
                },
                {
                    id: "vocalisation",
                    name: "vocalization",
                    value: this.breed.vocalisation,
                },
            ];

            setTimeout(() => {
                this.activeAnimation = true;
            }, 400);
        }
    }

    handleImageError(event: any) {
        event.target.src = '/assets/images/default-cat-image.webp';
    }
}
