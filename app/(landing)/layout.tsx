const LandingLayout=({
  children
}:{
  children:React.ReactNode
})=>{
  return(
      <main className="h-screen overflow-auto bg-pink-200/5 scroll-smooth ">
          {/* <div className="mx-auto max-w-screen h-full w-full"> */}
          {children}
          {/* </div> */}
      </main>
  )
}
export default LandingLayout