export default function Home() {
  function genColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
  }

  const year = new Date().getFullYear()

  let color1 = genColor()
  let color2 = genColor()
  let color3 = genColor()
  let color4 = genColor()

  return(
    <> 
      <header>
        <div>
          <title>Gerador de cores</title>
        </div>
      </header>

      <main>
        <div className="color1" style={{backgroundColor: color1}}>{color1}</div>
        <div className="color2" style={{backgroundColor: color2}}>{color2}</div>
        <div className="color3" style={{backgroundColor: color3}}>{color3}</div>
        <div className="color4" style={{backgroundColor: color4}}>{color4}</div>
      </main>
      <footer>Paulo &copy;{year}</footer>
    </>
  );
}
