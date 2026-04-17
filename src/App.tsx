// Substitua o bloco de listagem de resultados (o .map do results) por este layout organizado:

{results.map((item, index) => (
  <div key={index} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl mb-6">
    {/* CABEÇALHO PRINCIPAL */}
    <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-800 border-b border-slate-800 flex justify-between items-start">
      <div>
        <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">PN / OP INDIVIDUAL</p>
        <h2 className="text-xl font-black text-white">{item.PN_IND || '---'}</h2>
        <p className="text-[11px] text-blue-400 font-bold uppercase tracking-tighter">OP: {item.OP_IND || 'S/OP'}</p>
      </div>
      <div className="bg-orange-600 p-2 rounded-xl text-center min-w-[60px]">
        <p className="text-[8px] font-black text-white uppercase opacity-70">QTDI</p>
        <p className="text-xl font-black text-white">{item.QTDI || '0'}</p>
      </div>
    </div>

    {/* INFO TÉCNICA RÁPIDA */}
    <div className="grid grid-cols-3 gap-2 p-4 bg-slate-950/40 border-b border-slate-800">
      <div className="text-center">
        <p className="text-[8px] text-slate-500 font-bold uppercase">Material</p>
        <p className="text-[11px] font-bold text-slate-200">{item.MAT || '-'}</p>
      </div>
      <div className="text-center border-x border-slate-800">
        <p className="text-[8px] text-slate-500 font-bold uppercase">Espessura</p>
        <p className="text-[11px] font-bold text-slate-200">{item.ESP || '-'}</p>
      </div>
      <div className="text-center">
        <p className="text-[8px] text-slate-500 font-bold uppercase">Dimensões</p>
        <p className="text-[11px] font-bold text-slate-200">{item.DIM || '-'}</p>
      </div>
    </div>

    {/* STATUS DE PROCESSO */}
    <div className="p-4">
      <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Factory className="text-emerald-500 w-5 h-5" />
          <span className="text-lg font-black text-emerald-400 uppercase tracking-tighter">{item.PROC || 'PENDENTE'}</span>
        </div>
        <div className="text-right">
          <p className="text-[8px] text-emerald-600 font-black uppercase">Nesting</p>
          <p className="text-[10px] font-bold text-emerald-200">{item.NESTING || '-'}</p>
        </div>
      </div>
    </div>

    {/* DETALHES EXPANSÍVEIS (DATAS E OUTROS) */}
    <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-3 bg-slate-950/20 border-t border-slate-800/50">
       <div className="flex items-center gap-2">
         <Calendar className="w-3 h-3 text-slate-600" />
         <p className="text-[9px] text-slate-400">Prog: <span className="text-slate-200">{item.D_PROG || '-'}</span></p>
       </div>
       <div className="flex items-center gap-2">
         <Calendar className="w-3 h-3 text-slate-600" />
         <p className="text-[9px] text-slate-400">Corte: <span className="text-slate-200">{item.D_CORTE || '-'}</span></p>
       </div>
       <div className="col-span-2">
         <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Observações</p>
         <p className="text-[10px] text-slate-400 leading-tight italic">"{item.OBS || 'Nenhuma observação cadastrada.'}"</p>
       </div>
    </div>
  </div>
))}
