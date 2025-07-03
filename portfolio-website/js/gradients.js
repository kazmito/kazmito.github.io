var granimInstance = new Granim({
    element: '#granim-canvas',
    name: 'granim',
    opacity: [1, 1],
    stateTransitionSpeed: 800,
    states : {
        "default-state": {
            gradients: [
                ['#383838', '#000000'],
                ['#000000', '#383838'],
                ['#383838', '#000000'],
            ],
            transitionSpeed: 4000
        },
        "about-state": {
            gradients: [
                ['#a555fa', '#1340a7'],
                ['#1340a7', '#a555fa'],
                ['#a555fa', '#1340a7'],
            ],
            transitionSpeed: 4000
        },
        "projects-state": {
            gradients: [
                ['#58126A', '#F6B2E1'],
                ['#F6B2E1', '#58126A'],
                ['#58126A', '#F6B2E1'],
            ],
            transitionSpeed: 4000
        },
        "contact-state": {
            gradients: [
                ['#040082', '#00a7cc'],
                ['#00a7cc', '#040082'],
                ['#040082', '#00a7cc'],
            ],
            transitionSpeed: 4000
        },
    }
 });