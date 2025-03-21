import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Location {
  name: string;
  lat: number;
  lng: number;
  country: string;
}

const locations: Location[] = [
  // USA
  { name: 'New York', lat: 40.7128, lng: -74.0060, country: 'USA' },
  { name: 'Detroit', lat: 42.3314, lng: -83.0458, country: 'USA' },
  { name: 'Chicago', lat: 41.8781, lng: -87.6298, country: 'USA' },
  { name: 'Buffalo', lat: 42.8864, lng: -78.8784, country: 'USA' },
  { name: 'Cleveland', lat: 41.4993, lng: -81.6944, country: 'USA' },
  { name: 'Cincinnati', lat: 39.1031, lng: -84.5120, country: 'USA' },
  { name: 'Memphis', lat: 35.1495, lng: -90.0490, country: 'USA' },
  { name: 'Dallas', lat: 32.7767, lng: -96.7970, country: 'USA' },
  { name: 'Austin', lat: 30.2672, lng: -97.7431, country: 'USA' },
  { name: 'New Orleans', lat: 29.9511, lng: -90.0715, country: 'USA' },
  { name: 'Smoky Mountains', lat: 35.6532, lng: -83.5070, country: 'USA' },
  { name: 'Washington DC', lat: 38.9072, lng: -77.0369, country: 'USA' },
  { name: 'Tampa Bay', lat: 27.9506, lng: -82.4572, country: 'USA' },
  { name: 'Orlando', lat: 28.5383, lng: -81.3792, country: 'USA' },
  { name: 'Seattle', lat: 47.6062, lng: -122.3321, country: 'USA' },
  
  // Canada
  { name: 'Toronto', lat: 43.6532, lng: -79.3832, country: 'Canada' },
  { name: 'Montreal', lat: 45.5017, lng: -73.5673, country: 'Canada' },
  { name: 'Quebec City', lat: 46.8139, lng: -71.2080, country: 'Canada' },
  { name: 'Ottawa', lat: 45.4215, lng: -75.6972, country: 'Canada' },
  { name: 'Vancouver', lat: 49.2827, lng: -123.1207, country: 'Canada' },
  { name: 'Calgary', lat: 51.0447, lng: -114.0719, country: 'Canada' },
  
  // Other Countries
  { name: 'Karachi', lat: 24.8608, lng: 67.0011, country: 'Pakistan' },
  { name: 'Jeddah', lat: 21.5433, lng: 39.1728, country: 'Saudi Arabia' },
  { name: 'Makkah', lat: 21.4225, lng: 39.8262, country: 'Saudi Arabia' },
  { name: 'Medina', lat: 24.5247, lng: 39.5692, country: 'Saudi Arabia' },
];

const LocationPin: React.FC<{ location: Location }> = ({ location }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Group>(null);

  const phi = (90 - location.lat) * (Math.PI / 180);
  const theta = (location.lng + 180) * (Math.PI / 180);
  const radius = 2.55;

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
    // Keep text facing the camera
    if (textRef.current && hovered) {
      textRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={[x, y, z]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color={hovered ? '#4fa8c7' : '#61dafb'} />
      </mesh>
      {hovered && (
        <group ref={textRef} position={[x, y + 0.1, z]}>
          <Text
            fontSize={0.1}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            renderOrder={1}
          >
            {location.name}
          </Text>
        </group>
      )}
    </group>
  );
};

const Globe: React.FC = () => {
  const [texture] = useState(() => {
    const loader = new THREE.TextureLoader();
    return loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg');
  });

  return (
    <div style={{ width: '100%', height: '60vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <pointLight position={[0, 0, 10]} intensity={1} />
        <Sphere args={[2.5, 64, 64]}>
          <meshStandardMaterial
            map={texture}
            transparent
            opacity={1}
            metalness={0.3}
            roughness={0.8}
            emissive="#000000"
            emissiveIntensity={0}
          />
        </Sphere>
        {locations.map((location, index) => (
          <LocationPin key={index} location={location} />
        ))}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          minDistance={3}
          maxDistance={8}
          enableDamping={true}
          dampingFactor={0.05}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.PAN,
            RIGHT: THREE.MOUSE.PAN,
          }}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN,
          }}
        />
      </Canvas>
    </div>
  );
};

export default Globe; 