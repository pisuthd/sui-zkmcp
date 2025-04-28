"use client"

import { X, Menu, User, Copy, MonitorSmartphone, PlusCircle, KeyRound, MessageSquare } from "lucide-react"

const AccountContainer = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {/* Header */}
    <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Sui zkMCP Account</h1>
        <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Configure your AI assistants to interact with the Sui blockchain
        </p>
    </div>
    
    {/* Account Information Card */}
    <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white">Connected with zkLogin</h3>
                    <p className="text-blue-100/80">Google Account: username@gmail.com</p>
                </div>
            </div>
            <button className="px-4 py-2 bg-blue-800/60 hover:bg-blue-700/70 text-blue-200 text-sm rounded-lg transition border border-blue-700/40">
                Disconnect
            </button>
        </div>
        
        <div className="border-t border-blue-700/30 pt-8">
            <h4 className="text-lg font-medium text-white mb-4">Your Access Key</h4>
            <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg p-4 flex justify-between items-center">
                <code className="text-blue-300 font-mono">sui_zk_mcp_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0</code>
                <button className="p-2 hover:bg-blue-800/40 rounded-md transition" title="Copy to clipboard">
                    <Copy className="w-5 h-5 text-blue-300" />
                </button>
            </div>
            <p className="text-sm text-blue-300/70 mt-2">
                Use this access key to connect Claude Desktop or other MCP clients to the Sui blockchain
            </p>
        </div>
    </div>
    
    {/* Setup Instructions */}
    <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Connect to Claude Desktop</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                    </div>
                    <h3 className="text-lg font-medium text-white">Open Settings</h3>
                </div>
                <p className="text-blue-100/80 mb-4">
                    Open Claude Desktop and navigate to Settings → Integrations → MCP
                </p>
                <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg h-40 flex items-center justify-center">
                    <MonitorSmartphone className="w-12 h-12 text-blue-400/50" />
                </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                    </div>
                    <h3 className="text-lg font-medium text-white">Add MCP Service</h3>
                </div>
                <p className="text-blue-100/80 mb-4">
                    Click "Add MCP Service" and select "Custom" from the dropdown menu
                </p>
                <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg h-40 flex items-center justify-center">
                    <PlusCircle className="w-12 h-12 text-blue-400/50" />
                </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                    </div>
                    <h3 className="text-lg font-medium text-white">Enter Details</h3>
                </div>
                <p className="text-blue-100/80 mb-4">
                    Add the service name "Sui zkMCP", URL "https://zkmcp.sui.io" and paste your access key
                </p>
                <div className="bg-blue-950/60 border border-blue-800/50 rounded-lg h-40 flex items-center justify-center">
                    <KeyRound className="w-12 h-12 text-blue-400/50" />
                </div>
            </div>
        </div>
    </div>
    
    {/* Example Prompts */}
    <div>
        <h2 className="text-2xl font-bold text-white mb-6">Try These Prompts in Claude</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prompt 1 */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-medium text-white mb-2">Check Balance</h3>
                        <p className="text-blue-100/80 italic">
                            "What's my current SUI balance?"
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Prompt 2 */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-medium text-white mb-2">View NFTs</h3>
                        <p className="text-blue-100/80 italic">
                            "Show me all NFTs in my wallet"
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Prompt 3 */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-medium text-white mb-2">Transfer Tokens</h3>
                        <p className="text-blue-100/80 italic">
                            "Transfer 5 SUI to 0x123...abc"
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Prompt 4 */}
            <div className="bg-blue-900/40 border border-blue-700/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-medium text-white mb-2">Transaction History</h3>
                        <p className="text-blue-100/80 italic">
                            "Show my most recent transactions"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default AccountContainer