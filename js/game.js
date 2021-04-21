const game = new function() {
    const game = this;
    let scene, renderer, camera;
        keys = {},
        events = {
            'keydown' : null
        };
    
    const v = this.v = (x, y, z) => {
        return new THREE.Vector3(x, y, z)
    };
    
    game.on = (event_name, processor) => {
        events[event_name] = processor;
    };
    
    const addCube = this.addCube = (conf) => {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: '#6495ED' } );
        let cube = new THREE.Mesh( geometry, material );
        cube.position.copy(conf.position);
        scene.add( cube );
    };
    
    game.getCamera = () => {
        
        return camera;
    };
    
    const animate = this.animate = () => {
        if (events.keydown)
            events.keydown(keys);
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
        
    
        
    this.init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        window.addEventListener('keydown', (e) => {
            keys[e.code] = true;
        });
        
        window.addEventListener('keyup', (e) => {
            keys[e.code] = false;
        });
        
        document.body.appendChild(renderer.domElement);
        animate();
    };
};