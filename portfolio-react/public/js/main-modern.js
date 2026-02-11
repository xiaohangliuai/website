(function ($) {
    
    var Preloader = function () {
        $("html").addClass('preload');
        $(window).on('load', function () {
            $("#loader").fadeOut("slow", function () {
                $("#preloader").delay(300).fadeOut("slow");
            });
            $("html").removeClass('preload');
            $("html").addClass('loaded');
        });
    };
    
    var Animation = function () {
        // Check if THREE.js is loaded
        if (typeof THREE === 'undefined') {
            console.warn('THREE.js not loaded, skipping animation');
            return;
        }
        
        var SEPARATION = 150,
            AMOUNTX = 30,
            AMOUNTY = 30;
        var camera, scene, renderer;
        var particles, particle, count = 0;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        var mouseX = -windowHalfX,
            mouseY = -windowHalfY;
        
        function init() {
            try {
                camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1E5);
                camera.position.z = 1000;
                
                scene = new THREE.Scene();
                
                // Modern THREE.js approach using Points instead of Sprites
                var geometry = new THREE.BufferGeometry();
                var positions = [];
                var colors = [];
                
                particles = [];
                
                for (var ix = 0; ix < AMOUNTX; ix++) {
                    for (var iy = 0; iy < AMOUNTY; iy++) {
                        var x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                        var y = 0;
                        var z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                        
                        positions.push(x, y, z);
                        colors.push(0.93, 0.93, 0.93); // #EEEEEE
                        
                        particles.push({ ix: ix, iy: iy, x: x, z: z });
                    }
                }
                
                geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
                geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
                
                var material = new THREE.PointsMaterial({
                    size: 8,
                    vertexColors: true,
                    transparent: true,
                    opacity: 0.8
                });
                
                var points = new THREE.Points(geometry, material);
                scene.add(points);
                
                // Use WebGL renderer
                renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setClearColor(0x000000, 0);
                
                $('#wave').prepend(renderer.domElement);
                
                $(document).on('mousemove', function (event) {
                    mouseX = event.clientX * 0.5 - windowHalfX;
                });
                
                $(window).on('resize', function () {
                    windowHalfX = window.innerWidth / 2;
                    windowHalfY = window.innerHeight / 2;
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                });
                
                render();
            } catch (error) {
                console.error('Error initializing THREE.js animation:', error);
            }
        }
        
        function render() {
            camera.position.x += (mouseX - camera.position.x) * .05;
            camera.position.y += (-mouseY - camera.position.y) * .03;
            camera.position.z = 750;
            camera.lookAt(scene.position);
            
            // Update particle positions
            var positions = scene.children[0].geometry.attributes.position.array;
            for (var i = 0; i < particles.length; i++) {
                var particle = particles[i];
                var idx = i * 3;
                positions[idx + 1] = (Math.sin((particle.ix + count) * 0.25) * 50) + 
                                     (Math.sin((particle.iy + count) * 0.5) * 50);
            }
            scene.children[0].geometry.attributes.position.needsUpdate = true;
            
            renderer.render(scene, camera);
            count += 0.05;
            requestAnimationFrame(render);
        }
        
        return init();
    }
    
    var SmoothScroll = function () {
        $('.smoothscroll').on('click', function (e) {
            var $target = $(this.hash);
            e.preventDefault();
            e.stopPropagation();
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing');
        });
    };
    
    var AOSStart = function () {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                offset: 100,
                duration: 500,
                easing: 'ease-in-sine',
                delay: 250,
                once: true,
                disable: 'mobile'
            });
        }
    };
  
    var PageTrack = function () {
        // Analytics code removed for privacy
        if (self != top) top.location = self.location;
    };
    
    (function () {
        Preloader();
        PageTrack();
        Animation();
        SmoothScroll();
        AOSStart();
    })();
})(jQuery);
