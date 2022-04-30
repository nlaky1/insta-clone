import { async } from "@firebase/util";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header  from "../../components/Header";


function signIn({providers}) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center ">
      <img className="w-80" src="https://links.papareact.com/ocw"
      alt="" />
      <p className="font-xs italic">
        This is not real app this for portfolio purpose
      </p>
        <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="items-center justify-between ">
            <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-blue-400 dark:bg-blue-500 light:text-white-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
            " onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/'})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}

        </div>

      </div>
      
    </>

  )
}
export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
};
export default signIn;