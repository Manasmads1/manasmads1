import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ContactShadows, Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { P } from "./palette";
import { useDashboardTexture, useScreenTexture } from "./useScreenTexture";
import { sceneState } from "@/lib/sceneState";

const damp = THREE.MathUtils.damp;

/* ------------------------------- desk parts ------------------------------ */

const Desk = () => (
  <group position={[0, -0.02, 0]}>
    <RoundedBox args={[4.6, 0.12, 2.1]} radius={0.05} smoothness={4} castShadow receiveShadow>
      <meshStandardMaterial color={P.offWhite} roughness={0.45} metalness={0.05} />
    </RoundedBox>
    {[
      [-2.0, -0.62, 0.75],
      [2.0, -0.62, 0.75],
      [-2.0, -0.62, -0.75],
      [2.0, -0.62, -0.75],
    ].map(([x, y, z]) => (
      <mesh key={`${x}-${z}`} position={[x, y, z]} castShadow>
        <cylinderGeometry args={[0.045, 0.045, 1.16, 12]} />
        <meshStandardMaterial color={P.gunmetal} roughness={0.35} metalness={0.6} />
      </mesh>
    ))}
  </group>
);

type MonitorProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  texture: THREE.Texture;
  glow: string;
  glowRef?: React.MutableRefObject<THREE.PointLight | null>;
};

const Monitor = ({ position, rotation = [0, 0, 0], scale = 1, texture, glow, glowRef }: MonitorProps) => (
  <group position={position} rotation={rotation} scale={scale}>
    {/* stand */}
    <mesh position={[0, 0.16, 0]} castShadow>
      <cylinderGeometry args={[0.05, 0.07, 0.3, 14]} />
      <meshStandardMaterial color={P.gunmetal} roughness={0.3} metalness={0.7} />
    </mesh>
    <mesh position={[0, 0.03, 0]} receiveShadow castShadow>
      <cylinderGeometry args={[0.3, 0.32, 0.03, 24]} />
      <meshStandardMaterial color={P.gunmetal} roughness={0.3} metalness={0.7} />
    </mesh>
    {/* body */}
    <RoundedBox args={[1.72, 1.03, 0.06]} radius={0.035} smoothness={4} position={[0, 0.85, 0]} castShadow>
      <meshStandardMaterial color={P.charcoal} roughness={0.35} metalness={0.5} />
    </RoundedBox>
    {/* screen */}
    <mesh position={[0, 0.85, 0.034]}>
      <planeGeometry args={[1.6, 0.92]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
    {/* screen bleed light */}
    <pointLight
      ref={glowRef}
      position={[0, 0.85, 0.45]}
      color={glow}
      intensity={1.6}
      distance={2.6}
    />
  </group>
);

const Keyboard = ({ typingRef }: { typingRef: React.MutableRefObject<number> }) => {
  const keysRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const cols = 14;
  const rows = 4;
  const count = cols * rows;

  useFrame((state) => {
    const mesh = keysRef.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime;
    const amount = typingRef.current;
    for (let i = 0; i < count; i++) {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const press = amount * Math.max(0, Math.sin(t * 13 + i * 2.7)) * 0.012;
      dummy.position.set(-0.62 + c * 0.095, 0.012 - press, -0.11 + r * 0.075);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <group position={[0, 0.06, 0.62]}>
      <RoundedBox args={[1.44, 0.05, 0.44]} radius={0.02} smoothness={4} castShadow receiveShadow>
        <meshStandardMaterial color={P.gunmetal} roughness={0.4} metalness={0.5} />
      </RoundedBox>
      <instancedMesh ref={keysRef} args={[undefined, undefined, count]} castShadow>
        <boxGeometry args={[0.072, 0.024, 0.056]} />
        <meshStandardMaterial color={P.platinum} roughness={0.65} />
      </instancedMesh>
    </group>
  );
};

const Mouse = ({ mouseRef }: { mouseRef: React.MutableRefObject<THREE.Group | null> }) => (
  <group ref={mouseRef} position={[0.98, 0.08, 0.62]}>
    <mesh castShadow>
      <capsuleGeometry args={[0.055, 0.06, 6, 12]} />
      <meshStandardMaterial color={P.platinum} roughness={0.5} />
    </mesh>
  </group>
);

const Laptop = () => (
  <group position={[-1.62, 0.06, 0.34]} rotation={[0, 0.55, 0]}>
    <RoundedBox args={[0.82, 0.035, 0.56]} radius={0.02} smoothness={4} castShadow receiveShadow>
      <meshStandardMaterial color={P.gunmetal} roughness={0.35} metalness={0.6} />
    </RoundedBox>
    <group position={[0, 0.02, -0.28]} rotation={[-1.15, 0, 0]}>
      <RoundedBox args={[0.82, 0.54, 0.02]} radius={0.02} smoothness={4} position={[0, 0.27, 0]} castShadow>
        <meshStandardMaterial color={P.charcoal} roughness={0.35} metalness={0.5} />
      </RoundedBox>
      <mesh position={[0, 0.27, 0.012]}>
        <planeGeometry args={[0.74, 0.46]} />
        <meshBasicMaterial color="#1A2029" toneMapped={false} />
      </mesh>
    </group>
  </group>
);

const Headphones = () => (
  <group position={[1.72, 0.32, 0.1]} rotation={[0, -0.4, 0]}>
    {/* stand */}
    <mesh position={[0, -0.24, 0]} castShadow>
      <cylinderGeometry args={[0.02, 0.02, 0.5, 10]} />
      <meshStandardMaterial color={P.gunmetal} metalness={0.7} roughness={0.3} />
    </mesh>
    <mesh position={[0, -0.47, 0]} receiveShadow>
      <cylinderGeometry args={[0.16, 0.17, 0.03, 20]} />
      <meshStandardMaterial color={P.gunmetal} metalness={0.7} roughness={0.3} />
    </mesh>
    {/* band */}
    <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
      <torusGeometry args={[0.17, 0.022, 10, 28, Math.PI]} />
      <meshStandardMaterial color={P.charcoal} roughness={0.5} />
    </mesh>
    {[-0.17, 0.17].map((x) => (
      <mesh key={x} position={[x, -0.02, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <cylinderGeometry args={[0.085, 0.085, 0.05, 18]} />
        <meshStandardMaterial color={P.charcoal} roughness={0.6} />
      </mesh>
    ))}
  </group>
);

const Mug = () => (
  <group position={[-0.95, 0.12, 0.72]}>
    <mesh castShadow receiveShadow>
      <cylinderGeometry args={[0.085, 0.075, 0.16, 20]} />
      <meshStandardMaterial color={P.offWhite} roughness={0.55} />
    </mesh>
    <mesh position={[0.1, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.045, 0.012, 8, 18]} />
      <meshStandardMaterial color={P.offWhite} roughness={0.55} />
    </mesh>
  </group>
);

/* -------------------------------- figure -------------------------------- */

type FigureProps = {
  typingRef: React.MutableRefObject<number>;
  waveRef: React.MutableRefObject<number>;
  turnRef: React.MutableRefObject<number>;
};

const Figure = ({ typingRef, waveRef, turnRef }: FigureProps) => {
  const torso = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const armL = useRef<THREE.Group>(null);
  const armR = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const breathe = Math.sin(t * 1.15) * 0.018;

    if (torso.current) {
      torso.current.position.y = damp(torso.current.position.y, -0.52 + breathe, 6, delta);
      torso.current.rotation.y = damp(
        torso.current.rotation.y,
        sceneState.pointerX * 0.12 + turnRef.current * 0.5,
        4,
        delta,
      );
    }

    if (head.current) {
      head.current.rotation.y = damp(
        head.current.rotation.y,
        sceneState.pointerX * 0.34 + turnRef.current * 0.6 + Math.sin(t * 0.5) * 0.05,
        5,
        delta,
      );
      head.current.rotation.x = damp(
        head.current.rotation.x,
        -sceneState.pointerY * 0.16 + 0.08 + Math.sin(t * 0.73) * 0.03,
        5,
        delta,
      );
    }

    const typing = typingRef.current;
    if (armL.current) {
      armL.current.rotation.x =
        -1.05 + Math.sin(t * 9) * 0.05 * typing + Math.sin(t * 0.9) * 0.012;
    }
    if (armR.current) {
      const wave = waveRef.current;
      armR.current.rotation.z = damp(armR.current.rotation.z, wave * -1.5, 4, delta);
      armR.current.rotation.x =
        (-1.05 + Math.cos(t * 9.6) * 0.05 * typing) * (1 - wave) + wave * -0.2;
      if (wave > 0.05) armR.current.rotation.y = Math.sin(t * 6) * 0.35 * wave;
    }
  });

  return (
    <group ref={torso} position={[0, -0.52, 1.42]}>
      {/* hoodie torso */}
      <mesh position={[0, 0.42, 0]} castShadow>
        <capsuleGeometry args={[0.26, 0.42, 8, 20]} />
        <meshStandardMaterial color={P.gunmetal} roughness={0.85} />
      </mesh>
      {/* hood */}
      <mesh position={[0, 0.68, -0.14]} castShadow>
        <sphereGeometry args={[0.21, 20, 16]} />
        <meshStandardMaterial color={P.slate} roughness={0.9} />
      </mesh>
      {/* head */}
      <group ref={head} position={[0, 0.86, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.165, 24, 20]} />
          <meshStandardMaterial color="#E4C9B0" roughness={0.75} />
        </mesh>
        {/* hair cap */}
        <mesh position={[0, 0.05, -0.02]} scale={[1.03, 0.82, 1.03]}>
          <sphereGeometry args={[0.163, 20, 16, 0, Math.PI * 2, 0, Math.PI / 1.75]} />
          <meshStandardMaterial color="#2B2B2F" roughness={0.9} />
        </mesh>
        {/* headphone band on head */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.175, 0.018, 8, 24, Math.PI]} />
          <meshStandardMaterial color={P.charcoal} roughness={0.5} />
        </mesh>
        {[-0.17, 0.17].map((x) => (
          <mesh key={x} position={[x, -0.01, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.055, 0.055, 0.04, 14]} />
            <meshStandardMaterial color={P.charcoal} roughness={0.6} />
          </mesh>
        ))}
      </group>
      {/* arms reaching to the desk */}
      <group ref={armL} position={[-0.28, 0.56, 0]}>
        <mesh position={[0, 0, -0.28]} castShadow>
          <capsuleGeometry args={[0.065, 0.42, 6, 12]} />
          <meshStandardMaterial color={P.gunmetal} roughness={0.85} />
        </mesh>
      </group>
      <group ref={armR} position={[0.28, 0.56, 0]}>
        <mesh position={[0, 0, -0.28]} castShadow>
          <capsuleGeometry args={[0.065, 0.42, 6, 12]} />
          <meshStandardMaterial color={P.gunmetal} roughness={0.85} />
        </mesh>
      </group>
      {/* chair back */}
      <mesh position={[0, 0.34, 0.34]} castShadow>
        <boxGeometry args={[0.62, 0.72, 0.07]} />
        <meshStandardMaterial color={P.charcoal} roughness={0.7} />
      </mesh>
    </group>
  );
};

/* ---------------------------- holographic panels -------------------------- */

const HoloPanel = ({
  position,
  rotation,
  size,
  color,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  color: string;
}) => (
  <Float speed={1.1} rotationIntensity={0.14} floatIntensity={0.4}>
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={size} />
        <meshBasicMaterial color={color} transparent opacity={0.1} toneMapped={false} />
      </mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[-size[0] / 2 + 0.16 + (i % 2) * 0.06, size[1] / 2 - 0.12 - i * 0.11, 0.001]}>
          <planeGeometry args={[0.18 + (i % 3) * 0.12, 0.022]} />
          <meshBasicMaterial color={color} transparent opacity={0.55} toneMapped={false} />
        </mesh>
      ))}
    </group>
  </Float>
);

/* --------------------------------- scene --------------------------------- */

const sectionTargets: Record<string, { pos: [number, number, number]; look: [number, number, number] }> = {
  home: { pos: [0.1, 1.35, 5.0], look: [0, 0.65, 0] },
  work: { pos: [-1.15, 1.15, 4.1], look: [-0.25, 0.8, 0] },
  about: { pos: [0.9, 1.5, 4.4], look: [0.1, 0.7, 0] },
  skills: { pos: [0.15, 0.95, 3.4], look: [0, 0.55, 0.3] },
  tools: { pos: [-0.6, 1.7, 4.8], look: [0, 0.7, 0] },
  journey: { pos: [1.5, 1.25, 4.2], look: [0.45, 0.8, 0] },
  achievements: { pos: [0, 1.6, 4.6], look: [0, 0.85, 0] },
  contact: { pos: [0.2, 1.25, 3.9], look: [0, 0.75, 0.4] },
};

const WorkspaceScene = () => {
  const typingRef = useRef(0.35);
  const waveRef = useRef(0);
  const turnRef = useRef(0);
  const rgbLeft = useRef<THREE.PointLight>(null);
  const rgbRight = useRef<THREE.PointLight>(null);
  const mouseRef = useRef<THREE.Group>(null);
  const rig = useRef<THREE.Group>(null);

  const codeTex = useScreenTexture({ accent: P.accent });
  const dashTex = useDashboardTexture(P.accent);
  const lookTarget = useMemo(() => new THREE.Vector3(0, 0.65, 0), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const section = sceneState.section;
    const target = sectionTargets[section] ?? sectionTargets.home;

    // cinematic camera: section target + pointer parallax + gentle drift
    const cam = state.camera;
    const px = sceneState.pointerX * 0.35;
    const py = sceneState.pointerY * 0.22;
    cam.position.x = damp(cam.position.x, target.pos[0] + px, 2.2, delta);
    cam.position.y = damp(cam.position.y, target.pos[1] - py + Math.sin(t * 0.35) * 0.03, 2.2, delta);
    cam.position.z = damp(cam.position.z, target.pos[2], 2.2, delta);
    lookTarget.x = damp(lookTarget.x, target.look[0], 2.2, delta);
    lookTarget.y = damp(lookTarget.y, target.look[1], 2.2, delta);
    lookTarget.z = damp(lookTarget.z, target.look[2], 2.2, delta);
    cam.lookAt(lookTarget);

    // behaviour per section
    const wantTyping = section === "skills" || section === "home" || section === "tools" ? 1 : 0.25;
    const wantWave = section === "contact" ? 1 : 0;
    const wantTurn = section === "journey" ? 1 : section === "work" ? -0.35 : 0;
    typingRef.current = damp(typingRef.current, wantTyping, 3, delta);
    waveRef.current = damp(waveRef.current, wantWave, 3, delta);
    turnRef.current = damp(turnRef.current, wantTurn, 2.5, delta);

    // animated screen content
    codeTex.offset.y = (codeTex.offset.y + delta * (0.02 + typingRef.current * 0.05)) % 1;

    // RGB underglow breathing / hue shift
    if (rgbLeft.current) {
      rgbLeft.current.intensity = 2.2 + Math.sin(t * 1.4) * 0.5;
    }
    if (rgbRight.current) {
      rgbRight.current.intensity = 2.0 + Math.cos(t * 1.1) * 0.5;
    }

    // mouse nudge
    if (mouseRef.current) {
      mouseRef.current.position.x = 0.98 + Math.sin(t * 0.8) * 0.03 * (1 - waveRef.current);
      mouseRef.current.position.z = 0.62 + Math.cos(t * 0.6) * 0.02;
    }

    // whole rig micro-parallax
    if (rig.current) {
      rig.current.rotation.y = damp(rig.current.rotation.y, sceneState.pointerX * 0.06, 2.5, delta);
    }
  });

  return (
    <group ref={rig} position={[0, -0.35, 0]}>
      {/* studio lighting */}
      <ambientLight intensity={0.85} />
      <hemisphereLight args={["#ffffff", "#cfd6dd", 0.55]} />
      <directionalLight
        position={[3.2, 5, 4]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={16}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-bias={-0.0008}
      />
      {/* rim light */}
      <directionalLight position={[-4, 2.4, -3]} intensity={0.7} color="#BBD2FF" />
      {/* RGB underglow */}
      <pointLight ref={rgbLeft} position={[-1.5, -0.35, 0.4]} color={P.violet} intensity={2.2} distance={4} />
      <pointLight ref={rgbRight} position={[1.5, -0.35, 0.4]} color={P.cyan} intensity={2} distance={4} />

      <Desk />
      <Monitor position={[-0.62, 0.04, -0.42]} rotation={[0, 0.28, 0]} texture={codeTex} glow={P.accent} />
      <Monitor
        position={[1.18, 0.04, -0.3]}
        rotation={[0, -0.5, 0]}
        scale={0.82}
        texture={dashTex}
        glow={P.cyan}
      />
      <Keyboard typingRef={typingRef} />
      <Mouse mouseRef={mouseRef} />
      <Laptop />
      <Headphones />
      <Mug />
      <Figure typingRef={typingRef} waveRef={waveRef} turnRef={turnRef} />

      <HoloPanel position={[-2.1, 1.55, -0.2]} rotation={[0, 0.5, 0]} size={[0.9, 0.6]} color={P.accent} />
      <HoloPanel position={[2.2, 1.35, 0.1]} rotation={[0, -0.6, 0]} size={[0.8, 0.55]} color={P.cyan} />
      <HoloPanel position={[0.15, 2.1, -0.9]} rotation={[0, 0, 0]} size={[1.0, 0.5]} color={P.violet} />

      <ContactShadows
        position={[0, -1.22, 0]}
        opacity={0.32}
        scale={11}
        blur={2.6}
        far={4}
        resolution={512}
        color="#1B2026"
      />
    </group>
  );
};

export default WorkspaceScene;