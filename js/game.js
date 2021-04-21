const game = new function() {
    const game = this;
    let scene, renderer, camera;
    
    const v = this.v = (x, y, z) => {
        return new THREE.Vector3(x, y, z)
    };
    
    const addCube = this.addCube = (conf) => {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: '#6495ED' } );
        let cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
    };
    
    game.getCamera() = () => {
        
        return camera;
    };
    
    const animate = this.animate = () => {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };
        
    
        
    this.init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        animate();
    };
};