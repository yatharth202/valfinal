export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      

      <div className="absolute text-4xl animate-float1 left-[10%] bottom-[-50px]">
        ❤️
      </div>


      <div className="absolute text-3xl animate-float2 left-[30%] bottom-[-60px]">
        💕
      </div>


      <div className="absolute text-5xl animate-float3 left-[55%] bottom-[-70px]">
        💖
      </div>


      <div className="absolute text-3xl animate-float4 left-[75%] bottom-[-80px]">
        💗
      </div>


      <div className="absolute text-4xl animate-float5 left-[90%] bottom-[-60px]">
        💘
      </div>

    </div>
  );
}
