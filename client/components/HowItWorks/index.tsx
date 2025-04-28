"use client";

import { ArrowRight, ListChecks, Lock, Key, ArrowLeftRight, MessageCircle, Send, User, Check, Network, PlugZap, Shield, Database, CircleDollarSign, ExternalLink } from 'lucide-react';



const HowItWorks = () => {
    return <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
                Configure MCP-compatible client in minutes to start interacting with Sui
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Steps */}
            <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                        1
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Connect & Get Your Access Key</h3>
                        <p className="text-blue-100/80">
                            Sign in with Google or another provider via zkLogin to receive your OAuth access key for connecting to the Sui blockchain
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                {/* <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                        2
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Copy Your Access Key</h3>
                        <p className="text-blue-100/80">
                            Generate and copy your unique MCP access key from your account dashboard
                        </p>
                    </div>
                </div> */}

                {/* Step 3 */}
                <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                        2
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Configure Claude Desktop</h3>
                        <p className="text-blue-100/80">
                            Open Claude Desktop settings, paste your OAuth access key, and select the Sui network you want to use
                        </p> 
                       
                    </div>

                </div>

                <div className="bg-blue-950/60 mt-4 border border-blue-800/50 rounded-lg p-4 flex justify-between items-center">
                <pre className="text-blue-300 font-mono">
                {`{
  "mcpServers": {
    "hedera": {
      "command": "npx",
      "args": [
        "-y",
        "sui-zkmcp",
        "--sui_access_key=YOUR_ACCESS_KEY", 
        "--sui_network=testnet"
      ],
      "disabled": false
    }
  }
}`}
                </pre>
                
            </div>
            </div>

            {/* Right side: Claude Desktop mockup */}
            <div>
                <div className="flex mb-6 items-start">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                        3
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Start Using Natural Language</h3>
                        <p className="text-blue-100/80">
                            Ask Claude to check your balance, transfer SUI, or view transaction history using simple commands
                        </p>
                    </div>
                </div>
                <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6 shadow-xl">

                    <div className="mb-4 flex items-center justify-between border-b border-blue-700/30 pb-4">
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-blue-200 text-sm">Claude Desktop</div>
                        <div></div>
                    </div>

                    <div className="space-y-4 mb-4">
                        <div className="bg-blue-950/50 rounded-lg p-4 text-blue-200">
                            <p className="text-sm">Check my SUI balance</p>
                        </div>

                        <div className="bg-blue-900/60 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                                <div className="w-6 h-6 rounded-full bg-purple-600 mr-2"></div>
                                <p className="text-white font-medium">Claude</p>
                            </div>
                            <p className="text-blue-100/90 text-sm">
                                I've checked your Sui wallet and your current balance is 42.58 SUI.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-blue-700/30 pt-4">
                        <div className="bg-blue-800/50 rounded-full px-4 py-2 text-blue-200 text-sm flex items-center">
                            <span className="flex-grow">Ask me anything about your Sui wallet...</span>
                            <Send className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default HowItWorks