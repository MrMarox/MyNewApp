function test() {
    alert('You click me')
}

export default function Button ({children}: {children: JSX.Element | string}) {
    return (<button onClick={test}>{children}</button>)
  }
