type Props = {
  children: React.ReactNode
}

const AppProvider = ({ children }: Props) => {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  )
}

export default AppProvider;